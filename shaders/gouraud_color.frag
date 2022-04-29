#version 300 es

precision mediump float;

in vec3 ambient;
in vec3 diffuse;
in vec3 specular;

uniform vec3 material_color;    // Ka and Kd
uniform vec3 material_specular; // Ks

out vec4 FragColor;

void main() {
    // Initialize intensity variables

    ambient = ambient * material_color;
    diffuse = diffuse * material_color;
    specular = specular * material_specular;

    vec3 intensity = ambient + diffuse + specular;

    FragColor = vec4(intensity, 1.0);
}
