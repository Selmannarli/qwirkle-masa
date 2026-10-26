extends Node3D

const NAMES = ["pof", "robot", "cat", "cyclops", "star", "jelly"]
const COUNT = 32
var violet: StandardMaterial3D
var pale: StandardMaterial3D
var dark: StandardMaterial3D
var iris: StandardMaterial3D
var pink: StandardMaterial3D
var white: StandardMaterial3D
var rig: Node3D
var player: AnimationPlayer
var current_face = 0
var capture: SubViewport
var portrait_camera: Camera3D
var rendering = false

func material(color: String, roughness: float = 0.3) -> StandardMaterial3D:
	var m = StandardMaterial3D.new()
	m.albedo_color = Color(color)
	m.roughness = roughness
	m.metallic = 0.025
	m.clearcoat_enabled = true
	m.clearcoat = 0.15
	m.metallic_specular = 0.28
	m.clearcoat_roughness = 0.18
	m.cull_mode = BaseMaterial3D.CULL_DISABLED
	return m

func pivot(parent: Node3D, label: String, position_: Vector3) -> Node3D:
	var n = Node3D.new()
	n.name = label
	parent.add_child(n)
	n.position = position_
	return n

func mesh(parent: Node3D, geometry: Mesh, position_: Vector3, scale_: Vector3, m: Material) -> MeshInstance3D:
	var n = MeshInstance3D.new()
	n.mesh = geometry
	n.material_override = m
	parent.add_child(n)
	n.position = position_
	n.scale = scale_
	return n

func orb(parent: Node3D, position_: Vector3, scale_: Vector3, m: Material) -> MeshInstance3D:
	var geometry = SphereMesh.new()
	geometry.radius = 1.0
	geometry.height = 2.0
	geometry.radial_segments = 48
	geometry.rings = 32
	return mesh(parent, geometry, position_, scale_, m)

func cone(parent: Node3D, position_: Vector3, radius: float, height_: float, m: Material) -> MeshInstance3D:
	var geometry = CylinderMesh.new()
	geometry.top_radius = 0.025
	geometry.bottom_radius = radius
	geometry.height = height_
	geometry.radial_segments = 48
	return mesh(parent, geometry, position_, Vector3.ONE, m)

func rounded_box(parent: Node3D, position_: Vector3, dimensions: Vector3, radius: float, m: Material) -> MeshInstance3D:
	var st = SurfaceTool.new()
	st.begin(Mesh.PRIMITIVE_TRIANGLES)
	var half = dimensions * 0.5
	var inner = half - Vector3.ONE * radius
	var axes = [[Vector3.RIGHT,Vector3.BACK,Vector3.UP],[Vector3.LEFT,Vector3.FORWARD,Vector3.UP],[Vector3.UP,Vector3.RIGHT,Vector3.BACK],[Vector3.DOWN,Vector3.RIGHT,Vector3.FORWARD],[Vector3.BACK,Vector3.LEFT,Vector3.UP],[Vector3.FORWARD,Vector3.RIGHT,Vector3.UP]]
	var steps = 18
	for axes_ in axes:
		for y in range(steps):
			for x in range(steps):
				var vertices = []
				for uv in [Vector2(x,y),Vector2(x+1,y),Vector2(x+1,y+1),Vector2(x,y+1)]:
					var raw: Vector3 = (axes_[0] + axes_[1]*(uv.x/steps*2-1) + axes_[2]*(uv.y/steps*2-1)) * half
					var center = raw.clamp(-inner,inner)
					var normal = (raw-center).normalized()
					vertices.append([center+normal*radius,normal])
				for i in [0,2,1,0,3,2]:
					st.set_normal(vertices[i][1])
					st.add_vertex(vertices[i][0])
	return mesh(parent,st.commit(),position_,Vector3.ONE,m)

func catmull(a: Vector3,b: Vector3,c: Vector3,d: Vector3,t: float) -> Vector3:
	return 0.5*((2*b)+(-a+c)*t+(2*a-5*b+4*c-d)*t*t+(-a+3*b-3*c+d)*t*t*t)

func tube(parent: Node3D, points: Array, radius: float, m: Material, taper: bool = false) -> MeshInstance3D:
	var samples: Array[Vector3] = []
	for i in range(points.size()-1):
		for j in range(8):
			samples.append(catmull(points[max(0,i-1)],points[i],points[i+1],points[min(points.size()-1,i+2)],j/8.0))
	samples.append(points[-1])
	var st = SurfaceTool.new()
	st.begin(Mesh.PRIMITIVE_TRIANGLES)
	for i in range(samples.size()-1):
		for j in range(12):
			var quad = []
			for ij in [Vector2i(i,j),Vector2i(i+1,j),Vector2i(i+1,j+1),Vector2i(i,j+1)]:
				var tangent = (samples[min(ij.x+1,samples.size()-1)]-samples[max(0,ij.x-1)]).normalized()
				var side = Vector3(-tangent.y,tangent.x,0).normalized()
				var angle = ij.y/12.0*TAU
				var normal = side*cos(angle)+Vector3.BACK*sin(angle)
				var r = radius*(1.0-0.38*ij.x/(samples.size()-1)) if taper else radius
				quad.append([samples[ij.x]+normal*r,normal])
			for k in [0,2,1,0,3,2]:
				st.set_normal(quad[k][1])
				st.add_vertex(quad[k][0])
	orb(parent,points[0],Vector3.ONE*radius,m)
	orb(parent,points[-1],Vector3.ONE*radius*(.62 if taper else 1.0),m)
	return mesh(parent,st.commit(),Vector3.ZERO,Vector3.ONE,m)

func eye(parent: Node3D, label: String, at: Vector3, size_: float = 1.0) -> Node3D:
	var root = pivot(parent,label,at)
	root.scale = Vector3.ONE*size_
	orb(root,Vector3(0,0,-.01),Vector3(.222,.262,.105),iris)
	orb(root,Vector3.ZERO,Vector3(0.205,0.245,0.11),white)
	orb(root,Vector3(0.012,-0.008,0.096),Vector3(0.113,0.143,0.07),iris)
	orb(root,Vector3(0.012,-0.012,0.15),Vector3(0.072,0.101,0.033),dark)
	orb(root,Vector3(-0.022,0.045,0.18),Vector3(0.033,0.042,0.012),white)
	orb(root,Vector3(0.045,-0.055,0.18),Vector3(0.013,0.016,0.008),white)
	var closed=pivot(parent,label+"Closed",at)
	closed.scale=Vector3.ONE*size_
	tube(closed,[Vector3(-.13,0,.14),Vector3(0,.055,.155),Vector3(.13,0,.14)],.018,dark)
	closed.visible=false
	return root

func smile(parent: Node3D, at: Vector3, width_: float = 0.2) -> void:
	tube(parent,[at+Vector3(-width_,0,0),at+Vector3(0,-width_*0.47,0.025),at+Vector3(width_,0,0)],0.023,dark)

func build(face: int) -> void:
	if rig:
		rig.free()
	rig = pivot(self,"Rig",Vector3.ZERO)
	current_face=face
	if portrait_camera:
		portrait_camera.size=[3.1,3.95,3.7,3.85,3.1,3.3][face]
	match face:
		0: cloud()
		1: robot()
		2: cat()
		3: cyclops()
		4: star()
		5: jelly()
	create_animation(face)
	if not rendering:
		player.animation_finished.connect(func(_name): player.play("hello"))

func cloud() -> void:
	orb(rig,Vector3(0,-0.04,0),Vector3(0.88,0.69,0.54),violet)
	for shape in [[Vector3(-0.58,0.24,-0.02),Vector3(.5,.52,.47)],[Vector3(0,.57,-.08),Vector3(.58,.58,.49)],[Vector3(.58,.23,-.02),Vector3(.5,.51,.47)]]:
		orb(rig,shape[0],shape[1],violet)
	eye(rig,"EyeL",Vector3(-.29,.1,.48))
	eye(rig,"EyeR",Vector3(.29,.1,.48))
	orb(rig,Vector3(0,-.32,.52),Vector3(.17,.12,.045),dark)
	orb(rig,Vector3(0,-.38,.56),Vector3(.08,.035,.015),pink)
	for side in [-1,1]:
		orb(rig,Vector3(side*.39,-.64,.08),Vector3(.24,.18,.29),violet)
		var arm=pivot(rig,"ArmL" if side<0 else "ArmR",Vector3(side*.76,-.06,.02))
		orb(arm,Vector3(side*.11,-.17,.13),Vector3(.22,.25,.23),violet)
		orb(rig,Vector3(side*.55,-.1,.42),Vector3(.11,.055,.035),pink)

func robot() -> void:
	rounded_box(rig,Vector3(0,.4,0),Vector3(1.65,1.2,.84),.24,violet)
	rounded_box(rig,Vector3(0,.43,.45),Vector3(1.38,.83,.17),.2,dark)
	tube(rig,[Vector3(-.12,.17,.56),Vector3(0,.12,.57),Vector3(.12,.17,.56)],.018,pale)
	orb(rig,Vector3(0,-.2,0),Vector3(.17,.18,.18),iris)
	for side in [-1,1]:
		orb(rig,Vector3(side*.28,.44,.57),Vector3(.095,.17,.035),white)
		orb(rig,Vector3(side*.88,.4,-.04),Vector3(.15,.24,.27),iris)
		orb(rig,Vector3(side*.93,.4,.01),Vector3(.09,.18,.2),violet)
		orb(rig,Vector3(side*.53,-.27,0),Vector3(.18,.18,.18),iris)
		orb(rig,Vector3(side*.31,-.85,0),Vector3(.15,.18,.18),iris)
		var arm=pivot(rig,"ArmL" if side<0 else "ArmR",Vector3(side*.64,-.28,0))
		rounded_box(arm,Vector3(side*.07,-.18,0),Vector3(.24,.44,.28),.1,violet)
		orb(arm,Vector3(side*.09,-.48,.02),Vector3(.2,.21,.21),iris)
		orb(arm,Vector3(side*.09,-.5,.09),Vector3(.18,.17,.2),violet)
		rounded_box(rig,Vector3(side*.31,-1.01,.06),Vector3(.46,.35,.64),.13,violet)
		rounded_box(rig,Vector3(side*.31,-1.13,.1),Vector3(.46,.1,.66),.04,iris)
	rounded_box(rig,Vector3(0,-.52,-.02),Vector3(.95,.67,.65),.2,violet)
	rounded_box(rig,Vector3(0,-.47,.33),Vector3(.52,.22,.055),.07,pale)
	orb(rig,Vector3(0,1.11,-.03),Vector3(.055,.23,.055),iris)
	orb(rig,Vector3(0,1.37,-.03),Vector3(.14,.14,.14),violet)

func cat() -> void:
	orb(rig,Vector3(0,-.56,-.1),Vector3(.56,.59,.44),violet)
	for side in [-1,1]:
		var ear=cone(rig,Vector3(side*.52,.86,-.02),.34,.75,violet)
		ear.scale.z=.6
		ear.rotation.z=-side*.15
		var inside=cone(rig,Vector3(side*.52,.88,.13),.19,.48,pink)
		inside.scale.z=.25
		inside.rotation.z=-side*.15
		orb(rig,Vector3(side*.35,-1,.15),Vector3(.23,.17,.3),pale)
		orb(rig,Vector3(side*.57,-.63,.1),Vector3(.16,.3,.18),violet)
	orb(rig,Vector3(0,.24,0),Vector3(.81,.69,.54),violet)
	eye(rig,"EyeL",Vector3(-.29,.32,.48),.94)
	eye(rig,"EyeR",Vector3(.29,.32,.48),.94)
	for side in [-1,1]:
		orb(rig,Vector3(side*.17,-.05,.49),Vector3(.24,.17,.12),pale)
		for line in range(2):
			tube(rig,[Vector3(side*.45,-.08-line*.1,.48),Vector3(side*.72,-.02-line*.13,.4)],.012,iris)
	orb(rig,Vector3(0,.015,.61),Vector3(.075,.052,.045),pink)
	smile(rig,Vector3(0,-.16,.57),.11)
	tube(rig,[Vector3(.43,-.72,-.28),Vector3(.85,-.64,-.2),Vector3(1,-.24,-.1),Vector3(.84,-.08,-.05)],.105,violet,true)

func cyclops() -> void:
	orb(rig,Vector3(0,-.07,0),Vector3(.72,.94,.55),violet)
	for side in [-1,1]:
		var horn=cone(rig,Vector3(side*.43,.88,-.02),.17,.55,iris)
		horn.rotation.z=-side*.3
		var leg=pivot(rig,"LegL" if side<0 else "LegR",Vector3(side*.31,-.85,0))
		orb(leg,Vector3(0,-.2,.1),Vector3(.25,.22,.32),violet)
		orb(rig,Vector3(side*.75,-.16,.02),Vector3(.22,.3,.23),violet)
	eye(rig,"EyeL",Vector3(0,.27,.48),1.8)
	orb(rig,Vector3(0,-.43,.5),Vector3(.24,.15,.055),dark)
	for side in [-1,1]:
		var tooth=cone(rig,Vector3(side*.12,-.39,.55),.06,.16,pale)
		tooth.rotation.z=PI

func star_mesh() -> ArrayMesh:
	var polygon=[]
	for i in range(10):
		var angle=PI/2+i*TAU/10
		var radius=1.05 if i%2==0 else .6
		polygon.append(Vector3(cos(angle)*radius,sin(angle)*radius,0))
	var outline=[]
	for i in range(10):
		for j in range(10):
			outline.append(catmull(polygon[(i+9)%10],polygon[i],polygon[(i+1)%10],polygon[(i+2)%10],j/10.0))
	var st=SurfaceTool.new()
	st.begin(Mesh.PRIMITIVE_TRIANGLES)
	for side in [-1,1]:
		for ring in range(10):
			for j in range(outline.size()):
				var quad=[]
				for ij in [Vector2i(ring,j),Vector2i(ring+1,j),Vector2i(ring+1,(j+1)%outline.size()),Vector2i(ring,(j+1)%outline.size())]:
					var angle=ij.x/10.0*PI/2
					quad.append(outline[ij.y]*sin(angle)+Vector3(0,0,side*.38*cos(angle)))
				for k in [0,2,1,0,3,2]:
					st.set_smooth_group(0)
					st.add_vertex(quad[k])
	st.generate_normals()
	return st.commit()

func star() -> void:
	mesh(rig,star_mesh(),Vector3.ZERO,Vector3(1.08,1.08,1),violet)
	eye(rig,"EyeL",Vector3(-.27,.08,.33),.86)
	eye(rig,"EyeR",Vector3(.27,.08,.33),.86)
	smile(rig,Vector3(0,-.22,.35),.15)
	for side in [-1,1]:
		orb(rig,Vector3(side*.47,-.09,.3),Vector3(.085,.04,.02),pink)

func jelly() -> void:
	orb(rig,Vector3(0,.38,0),Vector3(.87,.65,.61),violet)
	for i in range(5):
		orb(rig,Vector3((i-2)*.3,-.11,.15),Vector3(.2,.15,.45),violet)
	for i in range(4):
		var side=-1.0 if i<2 else 1.0
		var tentacle=pivot(rig,"Tentacle"+str(i),Vector3((i-1.5)*.36,-.17,.04))
		tube(tentacle,[Vector3.ZERO,Vector3(side*.03,-.27,0),Vector3(side*.16,-.60,.05),Vector3(side*.32,-.65,.08),Vector3(side*.43,-.48,.10),Vector3(side*.35,-.34,.10)],.125,violet,true)
	eye(rig,"EyeL",Vector3(-.29,.4,.55),1.02)
	eye(rig,"EyeR",Vector3(.29,.4,.55),1.02)
	orb(rig,Vector3(0,.04,.61),Vector3(.085,.065,.025),dark)

func track(animation: Animation, node: Node3D, property: String, values: Array) -> void:
	var index=animation.add_track(Animation.TYPE_VALUE)
	animation.track_set_path(index,NodePath(str(rig.get_path_to(node))+":"+property))
	animation.track_set_interpolation_type(index,Animation.INTERPOLATION_CUBIC)
	for value in values:
		animation.track_insert_key(index,value[0],value[1])

func visibility_track(animation: Animation, node: Node3D, values: Array) -> void:
	var index=animation.add_track(Animation.TYPE_VALUE)
	animation.track_set_path(index,NodePath(str(rig.get_path_to(node))+":visible"))
	animation.value_track_set_update_mode(index,Animation.UPDATE_DISCRETE)
	for value in values:
		animation.track_insert_key(index,value[0],value[1])

func create_animation(face: int) -> void:
	player=AnimationPlayer.new()
	rig.add_child(player)
	player.root_node=NodePath("..")
	var animation=Animation.new()
	animation.length=1.0
	var settle=[[0.0,Vector3.ZERO],[.18,Vector3(0,-.045,0)],[.48,Vector3(0,.05,0)],[.75,Vector3(0,.015,0)],[1.0,Vector3.ZERO]]
	track(animation,rig,"position",settle)
	match face:
		0:
			track(animation,rig.get_node("ArmR"),"rotation:z",[[0.0,0.0],[.22,1.9],[.36,2.35],[.5,1.85],[.64,2.35],[.78,1.75],[1.0,0.0]])
		1:
			track(animation,rig.get_node("ArmR"),"rotation:z",[[0.0,0.0],[.25,2.65],[.5,2.65],[.7,2.1],[1.0,0.0]])
			track(animation,rig,"rotation:y",[[0.0,0.0],[.4,-.08],[1.0,0.0]])
		2:
			for label in ["EyeL","EyeR"]:
				track(animation,rig.get_node(label),"scale:y",[[0.0,.94],[.28,.94],[.4,.025],[.49,.025],[.65,.94],[1.0,.94]])
				visibility_track(animation,rig.get_node(label),[[0.0,true],[.38,false],[.56,true],[1.0,true]])
				visibility_track(animation,rig.get_node(label+"Closed"),[[0.0,false],[.38,true],[.56,false],[1.0,false]])
			track(animation,rig,"rotation:z",[[0.0,0.0],[.45,.07],[1.0,0.0]])
		3:
			track(animation,rig.get_node("LegL"),"rotation:x",[[0.0,0.0],[.3,-.9],[.6,-.9],[1.0,0.0]])
			track(animation,rig.get_node("LegL"),"position:y",[[0.0,-.85],[.3,-.62],[.6,-.62],[1.0,-.85]])
			track(animation,rig,"rotation:z",[[0.0,0.0],[.4,-.1],[.65,-.1],[1.0,0.0]])
		4:
			track(animation,rig.get_node("EyeL"),"scale:y",[[0.0,.86],[.2,.86],[.35,.025],[.6,.025],[.8,.86],[1.0,.86]])
			visibility_track(animation,rig.get_node("EyeL"),[[0.0,true],[.31,false],[.69,true],[1.0,true]])
			visibility_track(animation,rig.get_node("EyeLClosed"),[[0.0,false],[.31,true],[.69,false],[1.0,false]])
			track(animation,rig,"rotation:z",[[0.0,0.0],[.35,-.18],[.6,-.18],[1.0,0.0]])
		5:
			for i in range(4):
				var angle=.22 if i%2==0 else -.22
				track(animation,rig.get_node("Tentacle"+str(i)),"rotation:z",[[0.0,0.0],[.25,angle],[.5,-angle],[.75,angle],[1.0,0.0]])
	var library=AnimationLibrary.new()
	library.add_animation("hello",animation)
	player.add_animation_library("",library)
	player.play("hello")
	player.pause()

func _ready() -> void:
	get_viewport().transparent_bg=true
	get_viewport().msaa_3d=Viewport.MSAA_8X
	violet=material("#925cdb",.4)
	pale=material("#fff6ef",.34)
	white=material("#ffffff",.2)
	dark=material("#231c3c",.28)
	iris=material("#4c327c",.25)
	pink=material("#d49bc9",.38)
	var world=WorldEnvironment.new()
	var env=Environment.new()
	env.background_mode=Environment.BG_CLEAR_COLOR
	env.ambient_light_source=Environment.AMBIENT_SOURCE_COLOR
	env.ambient_light_color=Color("#b6abdc")
	env.ambient_light_energy=.32
	env.tonemap_mode=Environment.TONE_MAPPER_LINEAR
	world.environment=env
	add_child(world)
	var camera=Camera3D.new()
	portrait_camera=camera
	capture=SubViewport.new()
	capture.size=Vector2i(512,512)
	capture.transparent_bg=true
	capture.msaa_3d=Viewport.MSAA_8X
	capture.render_target_update_mode=SubViewport.UPDATE_ALWAYS
	capture.world_3d=get_world_3d()
	add_child(capture)
	capture.add_child(camera)
	camera.projection=Camera3D.PROJECTION_ORTHOGONAL
	camera.size=3.6
	camera.position=Vector3(.35,.4,7)
	camera.look_at(Vector3(0,.12,0))
	camera.current=true
	var key=DirectionalLight3D.new()
	add_child(key)
	key.rotation_degrees=Vector3(-32,-30,0)
	key.light_color=Color("#fff0df")
	key.light_energy=.8
	key.shadow_enabled=true
	var fill=DirectionalLight3D.new()
	add_child(fill)
	fill.rotation_degrees=Vector3(12,48,0)
	fill.light_color=Color("#d7d5ff")
	fill.light_energy=.28
	var rim=OmniLight3D.new()
	add_child(rim)
	rim.position=Vector3(1.4,1.5,-1.5)
	rim.omni_range=8
	rim.light_color=Color("#ecc6ff")
	rim.light_energy=.7
	var args=OS.get_cmdline_user_args()
	rendering="--render" in args
	if "--render" in args:
		await render_all()
	else:
		var canvas=CanvasLayer.new()
		add_child(canvas)
		var background=ColorRect.new()
		canvas.add_child(background)
		background.color=Color("#241a36")
		background.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
		var preview=TextureRect.new()
		canvas.add_child(preview)
		preview.texture=capture.get_texture()
		preview.expand_mode=TextureRect.EXPAND_IGNORE_SIZE
		preview.stretch_mode=TextureRect.STRETCH_KEEP_ASPECT_CENTERED
		preview.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
		var help=Label.new()
		canvas.add_child(help)
		help.text="1–6: character    SPACE: replay gesture"
		help.position=Vector2(20,480)
		build(0)
		player.play("hello")

func _unhandled_key_input(event: InputEvent) -> void:
	if rendering or not event is InputEventKey or not event.pressed or event.echo:
		return
	if event.keycode>=KEY_1 and event.keycode<=KEY_6:
		build(event.keycode-KEY_1)
		player.play("hello")
	elif event.keycode==KEY_SPACE:
		player.play("hello")

func render_all() -> void:
	var output=OS.get_environment("RENKIO_ART_OUTPUT")
	if output.is_empty():
		output=ProjectSettings.globalize_path("res://renders")
	var args=OS.get_cmdline_user_args()
	var only_previews="--previews" in args
	DirAccess.make_dir_recursive_absolute(output)
	for face in range(6):
		var selected=-1
		for arg in args:
			if arg.begins_with("--face="):
				selected=arg.trim_prefix("--face=").to_int()
		if selected>=0 and face!=selected:
			continue
		build(face)
		for frame in range(1 if only_previews else COUNT):
			player.seek(float(frame)/(COUNT-1),true)
			await get_tree().process_frame
			RenderingServer.force_draw(false)
			var image=capture.get_texture().get_image()
			var filename=output+"/"+NAMES[face]+"-%02d.png"%frame
			image.save_png(filename)
		print("RENDERED ",NAMES[face])
	get_tree().quit()
