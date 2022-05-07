#version 300 es

precision mediump float;

in vec3 ambient;
in vec3 diffuse;
in vec3 specular;
in vec2 frag_texcoord;

uniform vec3 material_color;    // Ka and Kd
uniform vec3 material_specular; // Ks
uniform sampler2D image;        // use in conjunction with Ka and Kd

out vec4 FragColor;

void main() {
    vec3 texcolor = vec3(texture(image, frag_texcoord));
    vec3 light = ambient * material_color * texcolor + diffuse * material_color * texcolor + specular * material_specular;
    FragColor = vec4(light, 1.0);
}