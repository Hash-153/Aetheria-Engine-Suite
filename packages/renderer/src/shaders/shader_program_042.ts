// Shader Pipeline Specification #042
export interface ShaderProgramPipeline_42 {
  vertexShaderSource: string;
  fragmentShaderSource: string;
  uniformDefinitions: { [key: string]: string };
}

export const SHADER_PIPELINE_42: ShaderProgramPipeline_42 = {
  vertexShaderSource: `#version 300 es
layout(location = 0) in vec2 aPosition;
layout(location = 1) in vec2 aTexCoord;
layout(location = 2) in vec4 aColor;

uniform mat4 uProjectionMatrix;
out vec2 vTexCoord;
out vec4 vColor;

void main() {
    vTexCoord = aTexCoord;
    vColor = aColor;
    gl_Position = uProjectionMatrix * vec4(aPosition, 0.0, 1.0);
}`,
  fragmentShaderSource: `#version 300 es
precision highp float;
in vec2 vTexCoord;
in vec4 vColor;
out vec4 fragColor;

uniform sampler2D uTexture;
uniform float uTime;

void main() {
    vec4 texColor = texture(uTexture, vTexCoord);
    float glow = sin(uTime * 2.0 + float(42)) * 0.15;
    fragColor = texColor * vColor + vec4(glow, glow * 0.5, glow * 1.2, 0.0);
}`,
  uniformDefinitions: {
    uProjectionMatrix: 'mat4',
    uTexture: 'sampler2D',
    uTime: 'float'
  }
};
