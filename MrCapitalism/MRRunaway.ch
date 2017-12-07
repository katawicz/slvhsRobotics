#include <mindstorms.h>
CMindstorms robot;

int lightVal;
int ultraVal;
int ultra2Val;
int touchVal;
int death;

robot.setJointSpeeds(NaN, 100, 100);

robot.turnLeft(30, 1.75, 6.25);



robot.getSensorLight(PORT2, lightVal);
robot.getSensorUltrasonic(PORT1, ultraVal);
robot.getSensorUltrasonic(PORT4, ultra2Val);
robot.getSensorTouch(PORT3, touchVal);



void dieBot(int pressed) {
    if (pressed) {
    robot.holdJoints();
    }
}

while (1) {


    if (ultraVal < 15) {
printf("heyy buddy\n");
    
}
    
    
    
    
    
    
    

    
    
    
    
}
