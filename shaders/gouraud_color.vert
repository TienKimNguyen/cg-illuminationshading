#version 300 es

//  Curved models are approximated with many flat polygons
//	Define normal per vertex
//	Use vertex normals in lighting equations
//	to determine a color per vertex
//  Interpolate colors across polygon

precision highp float;

in vec3 vertex_position;
in vec3 vertex_normal;

uniform vec3 light_ambient;
uniform vec3 light_position;
uniform vec3 light_color;
uniform vec3 camera_position;
uniform float material_shininess; // n
uniform mat4 model_matrix;
uniform mat4 view_matrix;
uniform mat4 projection_matrix;

out vec3 ambient;
out vec3 diffuse;
out vec3 specular;



void main() {
    gl_Position = projection_matrix * view_matrix * model_matrix * vec4(vertex_position, 1.0);
    ambient = light_ambient;
    vec3 l = normalize(light_position - vertex_position);
    
}
