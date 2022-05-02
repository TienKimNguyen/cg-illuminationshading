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
    // Vertex and normal in model_matrix.
    vec3 world_pos = vec3(model_matrix * vec4(vertex_position, 1.0));
    vec3 world_normal = vec3(model_matrix * vec4(vertex_normal, 0.0));

    // Ambient  
    ambient = light_ambient * light_color;

    // Diffuse
    vec3 light_direction = normalize(light_position - world_pos);
    diffuse = light_ambient * light_color * max(dot(world_normal, light_direction), 0.0);

    // Specular
    vec3 reflection_light = 2.0 * max(dot(world_normal, light_direction), 0.0) * world_normal - light_direction;
    vec3 view_direction = normalize (camera_position - world_pos);
    specular = light_ambient * light_color * pow(max(dot(reflection_light, view_direction), 0.0), material_shininess);    

    // The 3d display position
    gl_Position = projection_matrix * view_matrix * model_matrix * vec4(vertex_position, 1.0);
}
