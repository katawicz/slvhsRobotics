 #include <mindstorms.h>
CMindstorms robot;

void killBot(int touched) {
    if (touched){
        robot.holdJoints();
    }
}
