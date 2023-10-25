#include <stdio.h>
#include <unistd.h>

int main() {
    int time = 10; // Duration in seconds

    while (time > 0) {
        // Red light
        printf("Red\n");
        sleep(5); // Red light for 2 seconds

        // Green light
        printf("Green\n");
        sleep(5); // Green light for 2 seconds

        // Yellow light
        printf("Yellow\n");
        sleep(5); // Yellow light for 2 seconds

        time -= 6; // Reduce the time by 6 seconds (2 seconds per light)
    }

    return 0;
}