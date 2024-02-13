function determineAccess(role) {
    if (role === "Employee") {
        console.log("You are authorized to access Dietary Services.");
    } else if (role === "Enrolled Member") {
        console.log("You are authorized to access Dietary Services and one-on-one interaction with a dietician.");
    } else if (role === "Subscriber") {
        console.log("You have partial access to facilitate Dietary Services only.");
    } else {
        console.log("You need to enroll or at least subscribe first to avail this facility.");
    }
}

determineAccess("Non-Subscriber");