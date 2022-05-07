#version 300 es

precision highp float;

in vec3 vertex_position;
in vec3 vertex_normal;

uniform vec3 light_ambient;
uniform vec3 light_position[10];
uniform vec3 light_color[10];
//uniform vec3 light_position;
//uniform vec3 light_color;
uniform vec3 camera_position;
uniform float material_shininess; // n
uniform mat4 model_matrix;
uniform mat4 view_matrix;
uniform mat4 projection_matrix;

out vec3 ambient;
out vec3 diffuse;
out vec3 specular;



void main() {
    for (int i = 0; i < 10; i++) {
        // Vertex and normal in model_matrix.
        vec3 world_pos = vec3(model_matrix * vec4(vertex_position, 1.0));
        vec3 world_normal = normalize(vec3(model_matrix * vec4(vertex_normal, 0.0)));

        vec3 curr_light_pos = light_position[i];
        vec3 curr_light_color = light_color[i];

        // Ambient  
        ambient = ambient + light_ambient * curr_light_pos;

        // Diffuse
        vec3 light_direction = normalize(curr_light_pos - world_pos);
        diffuse = diffuse + light_ambient * curr_light_color * max(dot(world_normal, light_direction), 0.0);

        // Specular
        vec3 reflection_light = normalize(2.0 * max(dot(world_normal, light_direction), 0.0) * world_normal - light_direction);
        vec3 view_direction = normalize(camera_position - world_pos);
        specular = specular + light_ambient * curr_light_color * pow(max(dot(reflection_light, view_direction), 0.0), material_shininess);    
    }
    // The 3d display position
    gl_Position = projection_matrix * view_matrix * model_matrix * vec4(vertex_position, 1.0);
}
