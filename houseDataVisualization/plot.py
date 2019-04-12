import bpy
with open('data.txt') as inf:
    for line in inf:
        line = line.rstrip()
        points = [x.strip() for x in line.split(',')]
        bpy.ops.mesh.primitive_cube_add(size=1, view_align=False, enter_editmode=False, location=(float(plotPoints[0]),float(plotPoints[1]), float(plotPoints[2])))    
