#version 300 es

precision highp float;

in vec3 vertex_position;
in vec3 vertex_normal;

uniform mat4 model_matrix;
uniform mat4 view_matrix;
uniform mat4 projection_matrix;

out vec3 frag_pos;
out vec3 frag_normal;

void main() {
    vec4 vertPos4 = model_matrix * vec4(vertex_position, 1.0);
    frag_pos = vec3(vertPos4);
    frag_normal = vec3(model_matrix * vec4(vertex_normal, 0.0));
    gl_Position = projection_matrix * view_matrix * vertPos4;
}
