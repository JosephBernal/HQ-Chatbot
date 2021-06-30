a = "Regular Haircut $10/Hour, Dye $8/Hour, and for group prices contact Salon"
b = "Monday - Friday 9am to 5pm"
c = "Not available yet"
d = "Not available yet"
e = "If you need to book an appointment, use Contact Info"

function getBotResponse(input) {
    // Pretty sure theirs a better way of doing this
    if (input == "Prices") {
        return a;
    } else if (input == "prices") {
        return a;
    }
    if (input == "Hours of operation") {
        return ;
    } else if (input == "hours of operation") {
        return b;
    } else if (input == "Hours"){
        return b;
    } else if (input == "hours"){
        return b;
    } else if (input == "When are you open?"){
        return b;
    } else if (input == "when are you open?"){
        return b;
    } else if (input == "When are you open"){
        return b;
    } else if (input == "when are you open"){
        return b;
    }
    if (input == "Salon address") {
        return c;
    } else if (input == "salon address") {
        return c;
    } else if (input == "Where are you located?") {
        return c;
    } else if (input == "where are you located") {
        return c;
    } 
    if (input == "Salon contact") {
        return d;
    } else if (input == "salon contact") {
        return d;
    } else if (input == "Contact Info") {
        return d;
    } else if (input == "contact info") {
        return d;
    }
    if (input == "Appointment") {
        return e;
    } else if (input == "appointment") {
        return e;
    }
}