//
#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform vec2 u_resolution;
//uniform u_mouse;
uniform float u_time;

float circleshape(vec2 position, float radius){
    //return step(radius, length(position) );
    return step( 0.50*abs(sin(u_time)), length(position) );
}

void main(){

 vec2 position = (2.0 * gl_FragCoord.xy - u_resolution) / u_resolution.y;
 
 vec3 color = vec3(0.0);
 
 float circle = circleshape(position, 0.3);
 color = vec3(circle);
 
 gl_FragColor = vec4( color, 1.0 );   


}