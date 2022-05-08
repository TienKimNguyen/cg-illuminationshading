function createPlaneVertexArray(gl, position_attrib, normal_attrib, texcoord_attrib) {
    // create a new Vertex Array Object
    let vertex_array = gl.createVertexArray();
    // set newly created Vertex Array Object as the active one we are modifying
    gl.bindVertexArray(vertex_array);


    // create buffer to store vertex positions (3D points)
    let vertex_position_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_position_buffer);
    // create array of 3D vertex values (each set of 3 values specifies a vertex: x, y, z)
    let vertices = [
        -0.5, 0.0, 0.5,
        0.5, 0.0, 0.5,
        0.5, 0.0, -0.5,
        -0.5, 0.0, -0.5
    ];
    // store array of vertex positions in the vertex_position_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // enable position_attrib in our GPU program
    gl.enableVertexAttribArray(position_attrib);
    // attach vertex_position_buffer to the position_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(position_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store vertex normals (vector pointing perpendicular to surface)
    let vertex_normal_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_normal_buffer);
    // create array of 3D vector values (each set of 3 values specifies a normalized vector: x, y, z)
    let normals = [
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0
    ];
    // store array of vertex normals in the vertex_normal_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    // enable normal_attrib in our GPU program
    gl.enableVertexAttribArray(normal_attrib);
    // attach vertex_normal_buffer to the normal_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(normal_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store texture coordinate (2D coordinates for mapping images to the surface)
    let vertex_texcoord_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_texcoord_buffer);
    // create array of 2D texture coordinate values (each set of 2 values specifies texture coordinate: u, v)
    let texcoords = [
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0
    ];
    // store array of vertex texture coordinates in the vertex_texcoord_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
    // enable texcoord_attrib in our GPU program
    gl.enableVertexAttribArray(texcoord_attrib);
    // attach vertex_texcoord_buffer to the texcoord_attrib
    // (as 2-component floating point values)
    gl.vertexAttribPointer(texcoord_attrib, 2, gl.FLOAT, false, 0, 0);


    // create buffer to store faces of the triangle
    let vertex_index_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertex_index_buffer);
    // create array of vertex indices (each set of 3 represents a triangle)
    let indices = [
        0, 1, 2, 0, 2, 3,
    ];
    // store array of vertex indices in the vertex_index_buffer
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);


    // no longer modifying our Vertex Array Object, so deselect
    gl.bindVertexArray(null);


    // store the number of vertices used for entire model (number of faces * 3)
    vertex_array.face_index_count = indices.length;


    // return created Vertex Array Object
    return vertex_array;
}


function createCubeVertexArray(gl, position_attrib, normal_attrib, texcoord_attrib) {
    // create a new Vertex Array Object
    let vertex_array = gl.createVertexArray();
    // set newly created Vertex Array Object as the active one we are modifying
    gl.bindVertexArray(vertex_array);


    // create buffer to store vertex positions (3D points)
    let vertex_position_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_position_buffer);
    // create array of 3D vertex values (each set of 3 values specifies a vertex: x, y, z)
    let vertices = [
        // Front face
        -0.5, -0.5, 0.5,
        0.5, -0.5, 0.5,
        0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5,

        // Back face
        0.5, -0.5, -0.5,
        -0.5, -0.5, -0.5,
        -0.5, 0.5, -0.5,
        0.5, 0.5, -0.5,

        // Top face
        -0.5, 0.5, 0.5,
        0.5, 0.5, 0.5,
        0.5, 0.5, -0.5,
        -0.5, 0.5, -0.5,

        // Bottom face
        0.5, -0.5, 0.5,
        -0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5,
        0.5, -0.5, -0.5,

        // Right face
        0.5, -0.5, 0.5,
        0.5, -0.5, -0.5,
        0.5, 0.5, -0.5,
        0.5, 0.5, 0.5,

        // Left face
        -0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5,
        -0.5, 0.5, 0.5,
        -0.5, 0.5, -0.5
    ];
    // store array of vertex positions in the vertex_position_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // enable position_attrib in our GPU program
    gl.enableVertexAttribArray(position_attrib);
    // attach vertex_position_buffer to the position_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(position_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store vertex normals (vector pointing perpendicular to surface)
    let vertex_normal_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_normal_buffer);
    // create array of 3D vector values (each set of 3 values specifies a normalized vector: x, y, z)
    let normals = [
        // Front
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,

        // Back
        0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,

        // Top
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,

        // Bottom
        0.0, -1.0, 0.0,
        0.0, -1.0, 0.0,
        0.0, -1.0, 0.0,
        0.0, -1.0, 0.0,

        // Right
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,

        // Left
        -1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0
    ];
    // store array of vertex normals in the vertex_normal_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    // enable normal_attrib in our GPU program
    gl.enableVertexAttribArray(normal_attrib);
    // attach vertex_normal_buffer to the normal_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(normal_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store texture coordinate (2D coordinates for mapping images to the surface)
    let vertex_texcoord_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_texcoord_buffer);
    // create array of 2D texture coordinate values (each set of 2 values specifies texture coordinate: u, v)
    let texcoords = [
        // Front
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        // Back
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        // Top
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        // Bottom
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        // Right
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        // Left
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0
    ];
    // store array of vertex texture coordinates in the vertex_texcoord_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
    // enable texcoord_attrib in our GPU program
    gl.enableVertexAttribArray(texcoord_attrib);
    // attach vertex_texcoord_buffer to the texcoord_attrib
    // (as 2-component floating point values)
    gl.vertexAttribPointer(texcoord_attrib, 2, gl.FLOAT, false, 0, 0);


    // create buffer to store faces of the triangle
    let vertex_index_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertex_index_buffer);
    // create array of vertex indices (each set of 3 represents a triangle)
    let indices = [
        0, 1, 2,        0, 2, 3,      // Front
        4, 5, 6,        4, 6, 7,      // Back
        8, 9, 10,       8, 10, 11,    // Top
        12, 13, 14,     12, 14, 15,   // Bottom
        16, 17, 18,     16, 18, 19,   // Right
        20, 21, 22,     20, 22, 23    // Left
    ];
    // store array of vertex indices in the vertex_index_buffer
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);


    // no longer modifying our Vertex Array Object, so deselect
    gl.bindVertexArray(null);


    // store the number of vertices used for entire model (number of faces * 3)
    vertex_array.face_index_count = indices.length;


    // return created Vertex Array Object
    return vertex_array;
}


function createSphereVertexArray(gl, position_attrib, normal_attrib, texcoord_attrib) {
    // create a new Vertex Array Object
    let vertex_array = gl.createVertexArray();
    // set newly created Vertex Array Object as the active one we are modifying
    gl.bindVertexArray(vertex_array);


    // calculate vertices, normals, texture coordinate, and faces
    let slices = 36;
    let stacks = 18;

    let phi = 0;
    let delta_phi = 2 * Math.PI / slices;
    let theta = Math.PI / 2;
    let delta_theta = -Math.PI / stacks;

    let vertices = [];
    let normals = [];
    let texcoords = [];
    for (let i = 0; i <= slices; i++) {
        let cos_phi = Math.cos(phi);
        let sin_phi = Math.sin(phi);
        theta = Math.PI / 2;
        for (let j = 0; j <= stacks; j++) {
            let cos_theta = Math.cos(theta);
            let sin_theta = Math.sin(theta);
            let x = cos_theta * cos_phi;
            let y = sin_theta;
            let z = cos_theta * -sin_phi;
            vertices.push(x / 2, y / 2, z / 2);
            normals.push(x, y, z);
            texcoords.push(i / slices, 1.0 - j / stacks);

            theta += delta_theta;
        }
        phi += delta_phi;
    }

    let indices = [];
    for (let i = 0; i < slices; i++) {
        let k1 = i * (stacks + 1);
        let k2 = (i + 1) * (stacks + 1);
        for (let j = 0; j < stacks; j++) {
            indices.push(k1, k1 + 1, k2);
            indices.push(k1 + 1, k2 + 1, k2);
            k1++;
            k2++;
        }
    }


    // create buffer to store vertex positions (3D points)
    let vertex_position_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_position_buffer);
    // store array of vertex positions in the vertex_position_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // enable position_attrib in our GPU program
    gl.enableVertexAttribArray(position_attrib);
    // attach vertex_position_buffer to the position_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(position_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store vertex normals (vector pointing perpendicular to surface)
    let vertex_normal_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_normal_buffer);
    // store array of vertex normals in the vertex_normal_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    // enable normal_attrib in our GPU program
    gl.enableVertexAttribArray(normal_attrib);
    // attach vertex_normal_buffer to the normal_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(normal_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store texture coordinate (2D coordinates for mapping images to the surface)
    let vertex_texcoord_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_texcoord_buffer);
    // store array of vertex texture coordinates in the vertex_texcoord_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
    // enable texcoord_attrib in our GPU program
    gl.enableVertexAttribArray(texcoord_attrib);
    // attach vertex_texcoord_buffer to the texcoord_attrib
    // (as 2-component floating point values)
    gl.vertexAttribPointer(texcoord_attrib, 2, gl.FLOAT, false, 0, 0);


    // create buffer to store faces of the triangle
    let vertex_index_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertex_index_buffer);
    // store array of vertex indices in the vertex_index_buffer
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);


    // no longer modifying our Vertex Array Object, so deselect
    gl.bindVertexArray(null);


    // store the number of vertices used for entire model (number of faces * 3)
    vertex_array.face_index_count = indices.length;


    // return created Vertex Array Object
    return vertex_array;
}

// Create an octagon (16 vertices total, 8 sides)
function createCustomVertexArray(gl, position_attrib, normal_attrib, texcoord_attrib) {
    // create a new Vertex Array Object
    let vertex_array = gl.createVertexArray();
    // set newly created Vertex Array Object as the active one we are modifying
    gl.bindVertexArray(vertex_array);

    // create array of 3D vertex values (each set of 3 values specifies a vertex: x, y, z)
    let vertices = [];
    // create array of 3D vector values (each set of 3 values specifies a normalized vector: x, y, z)
    let normals = [];
    // create array of vertex indices (each set of 3 represents a triangle)
    let indices = [];
    // create array of 2D texture coordinate values (each set of 2 values specifies texture coordinate: u, v)
    let texcoords = [];

    let radius = 1.0;
    let theta = 360 / 8;

    let top_vertices = [0.0, 0.5, 0.0];
    let bottom_vertices = [0.0, - 0.5, 0.0];

    let top_normals = [0.0, 1.0, 0.0];
    let bottom_normals = [0.0, -1.0, 0.0];

    // Loop for sides
    for (let i = 0; i < 8; i++) {
        let x1 = Math.cos((Math.PI / 180) * i * theta) * radius;
        let x2 = Math.cos((Math.PI / 180) * (i + 1) * theta) * radius;
        let z1 = Math.sin((Math.PI / 180) * i * theta) * radius;
        let z2 = Math.sin((Math.PI / 180) * (i + 1) * theta) * radius;
        let y_top = 0.5;
        let y_bottom = -0.5;
    
        // Vertices
        vertices.push(
            x1, y_bottom, z1,
            x2, y_bottom, z2,
            x2, y_top, z2,
            x1, y_top, z1
        );
        top_vertices.push(x1, y_top, z1);
        bottom_vertices.push(x1, y_bottom, z1);

        // Normals
        let x_normal = Math.cos((Math.PI / 180) * (i + 0.5) * theta) * radius;
        let z_normal = Math.sin((Math.PI / 180) * (i + 0.5) * theta) * radius;
        normals.push(
            x_normal, 0, z_normal,
            x_normal, 0, z_normal,
            x_normal, 0, z_normal,
            x_normal, 0, z_normal
        );
        top_normals.push(0.0, 1.0, 0.0);
        bottom_normals.push(0.0, -1.0, 0.0);

        // Texture coordinates
        texcoords.push(
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0
        );

        // Indices
        indices.push(
            i * 4, i * 4 + 1, i * 4 + 2,    i * 4, i * 4 + 2, i * 4 + 3
        );
    }

    // Top and bottom of octagon
    for (let i = 0; i < top_vertices.length; i++){
        vertices.push(top_vertices[i]);
    }
    for (let i = 0; i < bottom_vertices.length; i++){
        vertices.push(bottom_vertices[i]);
    }
    for (let i = 0; i < top_normals.length; i++){
        normals.push(top_normals[i]);
    }
    for (let i = 0; i < bottom_normals.length; i++){
        normals.push(bottom_normals[i]);
    }

    let top_center_index = (indices.length / 6) * 4;
    for (let j = 0; j < 8; j++) {
        if (j == 7) {
            indices.push(top_center_index, top_center_index + j + 1, top_center_index + 1);
        } else {
            indices.push(top_center_index, top_center_index + j + 1, top_center_index + j + 2);
        }
    }

    let bottom_center_index = top_center_index + 9;
    for (let j = 0; j < 8; j++) {
        if (j == 7) {
            indices.push(bottom_center_index, bottom_center_index + j + 1, bottom_center_index + 1);
        } else {
            indices.push(bottom_center_index, bottom_center_index + j + 1, bottom_center_index + j + 2);
        }
    }

    texcoords.push(
        // Top
        0.0, 0.0,

        1.0, 0.0,
        1.0, 1.0,

        1.0, 0.0,
        1.0, 1.0,

        1.0, 0.0,
        1.0, 1.0,

        1.0, 0.0,
        1.0, 1.0,

        // Bottom
        0.0, 0.0, // center of bottom

        1.0, 0.0,
        1.0, 1.0,

        1.0, 0.0,
        1.0, 1.0,

        1.0, 0.0,
        1.0, 1.0,

        1.0, 0.0,
        1.0, 1.0,
    )

    console.log(vertices)

    // VERTICES
    // create buffer to store vertex positions (3D points)
    let vertex_position_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_position_buffer);
    // store array of vertex positions in the vertex_position_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // enable position_attrib in our GPU program
    gl.enableVertexAttribArray(position_attrib);
    // attach vertex_position_buffer to the position_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(position_attrib, 3, gl.FLOAT, false, 0, 0);


    // NORMALS
    // create buffer to store vertex normals (vector pointing perpendicular to surface)
    let vertex_normal_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_normal_buffer);
    // store array of vertex normals in the vertex_normal_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    // enable normal_attrib in our GPU program
    gl.enableVertexAttribArray(normal_attrib);
    // attach vertex_normal_buffer to the normal_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(normal_attrib, 3, gl.FLOAT, false, 0, 0);


    // TEXCOORDS
    // create buffer to store texture coordinate (2D coordinates for mapping images to the surface)
    let vertex_texcoord_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_texcoord_buffer);
    // store array of vertex texture coordinates in the vertex_texcoord_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
    // enable texcoord_attrib in our GPU program
    gl.enableVertexAttribArray(texcoord_attrib);
    // attach vertex_texcoord_buffer to the texcoord_attrib
    // (as 2-component floating point values)
    gl.vertexAttribPointer(texcoord_attrib, 2, gl.FLOAT, false, 0, 0);


    // INDICES
    // create buffer to store faces of the triangle
    let vertex_index_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertex_index_buffer);
    // store array of vertex indices in the vertex_index_buffer
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // no longer modifying our Vertex Array Object, so deselect
    gl.bindVertexArray(null);

    // store the number of vertices used for entire model (number of faces * 3)
    vertex_array.face_index_count = indices.length;

    return vertex_array;
}
