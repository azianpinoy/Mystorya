INSERT INTO users (firstName, lastName, email, password, bio, location, profilePic, createdAt, updatedAt)
VALUES ("James", "DeChavez", "abc@abc.com", "passwordyay", "I am James. Hello", "California", "http://lorempixel.com/400/200", now(), now());

INSERT INTO stories (title, body, viewCount, image, video, createdAt, updatedAt, userID)
VALUES ("Test Story", "This is a good story!", 0, "http://lorempixel.com/200/200/", null, now(), now(), 1);