#version 300 es

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
    // The current vertex position in the 3D view

    gl_Position = projection_matrix * view_matrix * model_matrix * vec4(vertex_position, 1.0);
    vec3 pos = vec3(model_matrix * vec4(vertex_position, 1.0));
    // Ambient  

    vec3 ambient = light_ambient * light_color;

    // Diffuse

    vec3 light_direction = normalize(light_position - pos);
    vec3 diffuse = light_ambient * light_color * dot(vertex_normal, light_direction);

    // Specular

    vec3 reflection_light = 2.0 * dot(vertex_normal, light_direction) * vertex_normal - light_direction;
    vec3 view_direction = normalize (camera_position - pos);
    vec3 specular = light_ambient * light_color * pow (dot(reflection_light, view_direction), material_shininess);    
}
