CREATE DATABASE  IF NOT EXISTS `csc675db` ;
USE `csc675db`;

/* Start Below */

DROP TABLE IF EXISTS `User`;

CREATE TABLE `User` (
  `user_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


LOCK TABLES `User` WRITE;

UNLOCK TABLES;

DROP TABLE IF EXISTS `School` ;

CREATE TABLE `School` (
  `school_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `school_name` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  PRIMARY KEY (`school_id`))
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `School` WRITE;

UNLOCK TABLES;



DROP TABLE IF EXISTS `Course` ;

CREATE TABLE `Course` (
  `course_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `course_name` VARCHAR(45) NOT NULL,
  `prerequisites` VARCHAR(45) NOT NULL,
  `number_of_seats` VARCHAR(45) NOT NULL,
  `number_of_exams` VARCHAR(45) NOT NULL,
  `materials` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  PRIMARY KEY (`course_id`))
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Course` WRITE;

UNLOCK TABLES;




DROP TABLE IF EXISTS `Major` ;

CREATE TABLE `Major` (
  `major_name` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `major_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`major_id`))
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Major` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Certificate` ;

CREATE TABLE `Certificate` (
  `certificate_name` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `certificate_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`certificate_id`))
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Certificate` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Degree` ;

CREATE TABLE `Degree` (
  `degree_type` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `degree_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`degree_id`))
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Degree` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Services` ;

CREATE TABLE `Services` (
  `language_id` TINYINT(1) NOT NULL,
  `services_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`services_id`))
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Services` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Transcript` ;

CREATE TABLE `Transcript` (
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `gpa` DECIMAL(6,2) NOT NULL,
  `units_completed` TINYINT(1) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `transcript_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`transcript_id`))
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Transcript` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Student` ;

CREATE TABLE `Student` (
  `student_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `School` TINYINT(1) NOT NULL,
  `Course` TINYINT(1) NOT NULL,
  `Major` TINYINT(1) NOT NULL,
  `Certificate` TINYINT(1) NOT NULL,
  `Degree` TINYINT(1) NOT NULL,
  `Services` TINYINT(1) NOT NULL,
  `Transcript` TINYINT(1) NOT NULL,
  PRIMARY KEY (`student_id`),
  INDEX `School_idx` (`School` ASC) VISIBLE,
  INDEX `Course_idx` (`Course` ASC) VISIBLE,
  INDEX `Certificate_idx` (`Certificate` ASC) VISIBLE,
  INDEX `Degree_idx` (`Degree` ASC) VISIBLE,
  INDEX `Services_idx` (`Services` ASC) VISIBLE,
  INDEX `Transcript_idx` (`Transcript` ASC) VISIBLE,
  INDEX `Major_idx` (`Major` ASC) VISIBLE,
  CONSTRAINT `fk_School_student`
    FOREIGN KEY (`School`)
    REFERENCES `mydb`.`School` (`school_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Course_Student`
    FOREIGN KEY (`Course`)
    REFERENCES `mydb`.`Course` (`course_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Major_Student`
    FOREIGN KEY (`Major`)
    REFERENCES `mydb`.`Major` (`major_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Certificate_Student`
    FOREIGN KEY (`Certificate`)
    REFERENCES `mydb`.`Certificate` (`certificate_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Degree_Student`
    FOREIGN KEY (`Degree`)
    REFERENCES `mydb`.`Degree` (`degree_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Services_Student`
    FOREIGN KEY (`Services`)
    REFERENCES `mydb`.`Services` (`services_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Transcript_Student`
    FOREIGN KEY (`Transcript`)
    REFERENCES `mydb`.`Transcript` (`transcript_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Student` WRITE;

UNLOCK TABLES;



DROP TABLE IF EXISTS `Languages` ;

CREATE TABLE `Languages` (
  `languages_name` VARCHAR(45) NOT NULL,
  `languages_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`languages_id`))
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Languages` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Admin` ;

CREATE TABLE `Admin` (
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `admin_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`admin_id`))
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Admin` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `SupportTeam` ;

CREATE TABLE `SupportTeam` (
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `phone_number` CHAR(10) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `supportTeam_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  UNIQUE INDEX `phone_number_UNIQUE` (`phone_number` ASC) VISIBLE,
  PRIMARY KEY (`supportTeam_id`))
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `SupportTeam` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Teacher` ;

CREATE TABLE `Teacher` (
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `department` VARCHAR(45) NOT NULL,
  `phone_number` CHAR(10) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `teacher_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `phone_number_UNIQUE` (`phone_number` ASC) VISIBLE,
  PRIMARY KEY (`teacher_id`))
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Teacher` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `PoliceOfficer` ;

CREATE TABLE `PoliceOfficer` (
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `policeOfficer_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`policeOfficer_id`))
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `PoliceOfficer` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `NetworkSecuritySpecialist` ;

CREATE TABLE `NetworkSecuritySpecialist` (
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `networkSecuritySpecialist_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`networkSecuritySpecialist_id`))
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `NetworkSecuritySpecialist` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Counselor` ;

CREATE TABLE `Counselor` (
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `department` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `counselor_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`counselor_id`))
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Counselor` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `President` ;

CREATE TABLE `President` (
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `president_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`president_id`))
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `President` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Employee` ;

CREATE TABLE `Employee` (
  `employee_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `occupation` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `School` TINYINT(1) NOT NULL,
  `Admin` TINYINT(1) NOT NULL,
  `SupportTeam` TINYINT(1) NOT NULL,
  `Teacher` TINYINT(1) NOT NULL,
  `PoliceOfficer` TINYINT(1) NOT NULL,
  `NetworkSecuritySpecialist` TINYINT(1) NOT NULL,
  `Counselor` TINYINT(1) NOT NULL,
  `President` TINYINT(1) NOT NULL,
  PRIMARY KEY (`employee_id`),
  INDEX `School_idx` (`School` ASC) VISIBLE,
  INDEX `Admin_idx` (`Admin` ASC) VISIBLE,
  INDEX `SupportTeam_idx` (`SupportTeam` ASC) VISIBLE,
  INDEX `Teacher_idx` (`Teacher` ASC) VISIBLE,
  INDEX `PoliceOfficer_idx` (`PoliceOfficer` ASC) VISIBLE,
  INDEX `NetworkSecuritySpecialist_idx` (`NetworkSecuritySpecialist` ASC) VISIBLE,
  INDEX `Counselor_idx` (`Counselor` ASC) VISIBLE,
  INDEX `President_idx` (`President` ASC) VISIBLE,
  CONSTRAINT `fk_School_Employee`
    FOREIGN KEY (`School`)
    REFERENCES `mydb`.`School` (`school_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Admin_Employee`
    FOREIGN KEY (`Admin`)
    REFERENCES `mydb`.`Admin` (`admin_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_SupportTeam_Employee`
    FOREIGN KEY (`SupportTeam`)
    REFERENCES `mydb`.`SupportTeam` (`supportTeam_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Teacher_Employee`
    FOREIGN KEY (`Teacher`)
    REFERENCES `mydb`.`Teacher` (`teacher_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_PoliceOfficer_Employee`
    FOREIGN KEY (`PoliceOfficer`)
    REFERENCES `mydb`.`PoliceOfficer` (`policeOfficer_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_NetworkSecuritySpecialist_Employee`
    FOREIGN KEY (`NetworkSecuritySpecialist`)
    REFERENCES `mydb`.`NetworkSecuritySpecialist` (`networkSecuritySpecialist_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Counselor_Employee`
    FOREIGN KEY (`Counselor`)
    REFERENCES `mydb`.`Counselor` (`counselor_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_President_Employee`
    FOREIGN KEY (`President`)
    REFERENCES `mydb`.`President` (`president_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Employee` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `TeachingAssistant` ;

CREATE TABLE `TeachingAssistant` (
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `teachingAssistant_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `Student` TINYINT(1) NOT NULL,
  PRIMARY KEY (`teachingAssistant_id`),
  INDEX `Student_idx` (`Student` ASC) VISIBLE,
  CONSTRAINT `fk_Student_TeachingAssistant`
    FOREIGN KEY (`Student`)
    REFERENCES `mydb`.`Student` (`student_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `TeachingAssistant` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `CommunityCollege` ;

CREATE TABLE `CommunityCollege` (
  `highest_degree` VARCHAR(45) NOT NULL,
  `cost` DECIMAL(6,2) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `communityCollege_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `School` TINYINT(1) NOT NULL,
  PRIMARY KEY (`communityCollege_id`),
  INDEX `School_idx` (`School` ASC) VISIBLE,
  CONSTRAINT `fk_School_CommunityCollege`
    FOREIGN KEY (`School`)
    REFERENCES `mydb`.`School` (`school_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `CommunityCollege` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `University` ;

CREATE TABLE `University` (
  `highest_degree` VARCHAR(45) NOT NULL,
  `cost` DECIMAL(6,2) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `university_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `School` TINYINT(1) NOT NULL,
  PRIMARY KEY (`university_id`),
  INDEX `School_idx` (`School` ASC) VISIBLE,
  CONSTRAINT `fk_School_University`
    FOREIGN KEY (`School`)
    REFERENCES `mydb`.`School` (`school_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `University` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `RoomType` ;

CREATE TABLE `RoomType` (
  `size` INT NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `RoomType_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`RoomType_id`))
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `RoomType` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Rooms` ;

CREATE TABLE `Rooms` (
  `Room_number` INT NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `floor` TINYINT(9) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `rooms_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `RoomType` TINYINT(1) NOT NULL,
  `School` TINYINT(1) NOT NULL,
  PRIMARY KEY (`rooms_id`),
  INDEX `RoomType_idx` (`RoomType` ASC) VISIBLE,
  INDEX `School_idx` (`School` ASC) VISIBLE,
  CONSTRAINT `fk_RoomType_Rooms`
    FOREIGN KEY (`RoomType`)
    REFERENCES `mydb`.`RoomType` (`RoomType_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_School_Rooms`
    FOREIGN KEY (`School`)
    REFERENCES `mydb`.`School` (`school_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Rooms` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Classroom` ;

CREATE TABLE `Classroom` (
  `classroom_name` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `classroom_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `RoomType` TINYINT(1) NOT NULL,
  PRIMARY KEY (`classroom_id`, `classroom_name`),
  INDEX `RoomType_idx` (`RoomType` ASC) VISIBLE,
  CONSTRAINT `fk_RoomType_Classroom`
    FOREIGN KEY (`RoomType`)
    REFERENCES `mydb`.`RoomType` (`RoomType_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Classroom` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Auditorium` ;

CREATE TABLE `Auditorium` (
  `auditorium_name` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `auditorium_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `RoomType` TINYINT(1) NOT NULL,
  PRIMARY KEY (`auditorium_id`),
  INDEX `fk_RoomType_idx` (`RoomType` ASC) VISIBLE,
  CONSTRAINT `fk_RoomType_Auditorium`
    FOREIGN KEY (`RoomType`)
    REFERENCES `mydb`.`RoomType` (`RoomType_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Auditorium` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Labatory` ;

CREATE TABLE `Labatory` (
  `labatory_name` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `labatory_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `RoomType` TINYINT(1) NOT NULL,
  PRIMARY KEY (`labatory_id`),
  INDEX `RoomType_idx` (`RoomType` ASC) VISIBLE,
  CONSTRAINT `fk_RoomType_Labatory`
    FOREIGN KEY (`RoomType`)
    REFERENCES `mydb`.`RoomType` (`RoomType_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Labatory` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Office` ;

CREATE TABLE `Office` (
  `office_name` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `office_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `RoomType` TINYINT(1) NOT NULL,
  PRIMARY KEY (`office_id`),
  INDEX `RoomType_idx` (`RoomType` ASC) VISIBLE,
  CONSTRAINT `fk_RoomType_Office`
    FOREIGN KEY (`RoomType`)
    REFERENCES `mydb`.`RoomType` (`RoomType_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Office` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Cafeteria` ;

CREATE TABLE `Cafeteria` (
  `cafeteria_name` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `cafeteria_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `RoomType` TINYINT(1) NOT NULL,
  PRIMARY KEY (`cafeteria_id`),
  INDEX `RoomType_idx` (`RoomType` ASC) VISIBLE,
  CONSTRAINT `fk_RoomType_Cafeteria`
    FOREIGN KEY (`RoomType`)
    REFERENCES `mydb`.`RoomType` (`RoomType_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Cafeteria` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `HealthRoom` ;

CREATE TABLE `HealthRoom` (
  `healthroom` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `healthRoom_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `RoomType` TINYINT(1) NOT NULL,
  PRIMARY KEY (`healthRoom_id`),
  INDEX `RoomType_idx` (`RoomType` ASC) VISIBLE,
  CONSTRAINT `fk_RoomType_HealthRoom`
    FOREIGN KEY (`RoomType`)
    REFERENCES `mydb`.`RoomType` (`RoomType_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `HealthRoom` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Library` ;

CREATE TABLE`Library` (
  `library_name` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `library_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `RoomType` TINYINT(1) NOT NULL,
  PRIMARY KEY (`library_id`),
  INDEX `RoomType_idx` (`RoomType` ASC) VISIBLE,
  CONSTRAINT `fk_RoomType_Library`
    FOREIGN KEY (`RoomType`)
    REFERENCES `mydb`.`RoomType` (`RoomType_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Library` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `StudentEvaluation` ;

CREATE TABLE`StudentEvaluation` (
  `studentEvaluation_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `evaluation_name` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `Student` TINYINT(1) NOT NULL,
  PRIMARY KEY (`studentEvaluation_id`, `language_id`),
  INDEX `Student_idx` (`Student` ASC) VISIBLE,
  CONSTRAINT `Student`
    FOREIGN KEY (`Student`)
    REFERENCES `mydb`.`Student` (`student_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `StudentEvaluation` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Department` ;

CREATE TABLE `Department` (
  `department_name` VARCHAR(45) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `department_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `School` TINYINT(1) NOT NULL,
  PRIMARY KEY (`department_id`),
  INDEX `fk_School_Department_idx` (`School` ASC) VISIBLE,
  CONSTRAINT `fk_School_Department`
    FOREIGN KEY (`School`)
    REFERENCES `mydb`.`School` (`school_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Department` WRITE;

UNLOCK TABLES;



DROP TABLE IF EXISTS `CourseSection` ;

CREATE TABLE `CourseSection` (
  `section_number` TINYINT(9) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `courseSection_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `Course` TINYINT(1) NOT NULL,
  PRIMARY KEY (`courseSection_id`),
  INDEX `Course_idx` (`Course` ASC) VISIBLE,
  CONSTRAINT `fk_Course_CourseSchedule`
    FOREIGN KEY (`Course`)
    REFERENCES `mydb`.`Course` (`course_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `CourseSection` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `CourseDescription` ;

CREATE TABLE `CourseDescription` (
  `course_name` VARCHAR(45) NOT NULL,
  `course_description` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `courseDescription_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `Course` TINYINT(1) NOT NULL,
  PRIMARY KEY (`courseDescription_id`),
  INDEX `Course_idx` (`Course` ASC) VISIBLE,
  CONSTRAINT `fk_Course_CourseDescription`
    FOREIGN KEY (`Course`)
    REFERENCES `mydb`.`Course` (`course_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `CourseDescription` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Schedule` ;

CREATE TABLE `Schedule` (
  `year` SMALLINT(1) NOT NULL,
  `month` TINYINT(9) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `Schedule_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `School` TINYINT(1) NOT NULL,
  PRIMARY KEY (`Schedule_id`),
  INDEX `School_idx` (`School` ASC) VISIBLE,
  CONSTRAINT `fk_School_Schedule`
    FOREIGN KEY (`School`)
    REFERENCES `mydb`.`School` (`school_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Schedule` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `SchoolCalendar` ;

CREATE TABLE `SchoolCalendar` (
  `term` VARCHAR(45) NOT NULL,
  `holidays` TINYINT(9) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `schoolCalendar_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `Schedule` TINYINT(1) NOT NULL,
  PRIMARY KEY (`schoolCalendar_id`),
  INDEX `Schedule_idx` (`Schedule` ASC) VISIBLE,
  CONSTRAINT `fk_Schedule_SchoolCalendar`
    FOREIGN KEY (`Schedule`)
    REFERENCES `mydb`.`Schedule` (`Schedule_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `SchoolCalendar` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `CourseSchedule` ;

CREATE TABLE `CourseSchedule` (
  `days` INT NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `courseSchedule_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `Course` TINYINT(1) NOT NULL,
  `Schedule` TINYINT(1) NOT NULL,
  PRIMARY KEY (`courseSchedule_id`),
  INDEX `Course_idx` (`Course` ASC) VISIBLE,
  INDEX `Schedule_idx` (`Schedule` ASC) VISIBLE,
  CONSTRAINT `fk_Course_CourseSchedule_1`
    FOREIGN KEY (`Course`)
    REFERENCES `mydb`.`Course` (`course_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Schedule_CourseSchedule`
    FOREIGN KEY (`Schedule`)
    REFERENCES `mydb`.`Schedule` (`Schedule_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `CourseSchedule` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `ClubMeeting` ;

CREATE TABLE `ClubMeeting` (
  `days` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `clubMeeting_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `Schedule` TINYINT(1) NOT NULL,
  PRIMARY KEY (`clubMeeting_id`, `language_id`),
  INDEX `fk_Schedule_ClubMeeting_idx` (`Schedule` ASC) VISIBLE,
  CONSTRAINT `fk_Schedule_ClubMeeting`
    FOREIGN KEY (`Schedule`)
    REFERENCES `mydb`.`Schedule` (`Schedule_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `ClubMeeting` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Syllabus` ;

CREATE TABLE`Syllabus` (
  `syllabus_name` VARCHAR(45) NOT NULL,
  `semester_term` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `syllabus_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `Course` TINYINT(1) NOT NULL,
  PRIMARY KEY (`syllabus_id`),
  INDEX `Course_idx` (`Course` ASC) VISIBLE,
  CONSTRAINT `fk_Course_Syllabus`
    FOREIGN KEY (`Course`)
    REFERENCES `mydb`.`Course` (`course_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Syllabus` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Subjects` ;

CREATE TABLE `Subjects` (
  `subject_name` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `subjects_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `Course` TINYINT(1) NOT NULL,
  PRIMARY KEY (`subjects_id`),
  INDEX `Course_idx` (`Course` ASC) VISIBLE,
  CONSTRAINT `fk_Course_Subjects`
    FOREIGN KEY (`Course`)
    REFERENCES `mydb`.`Course` (`course_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Subjects` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Plans` ;

CREATE TABLE `Plans` (
  `plan_name` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `plans_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `Services` TINYINT(1) NOT NULL,
  PRIMARY KEY (`plans_id`),
  INDEX `Services_idx` (`Services` ASC) VISIBLE,
  CONSTRAINT `fk_Services_Plans`
    FOREIGN KEY (`Services`)
    REFERENCES `mydb`.`Services` (`services_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Plans` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `MealPlan` ;

CREATE TABLE `MealPlan` (
  `cost` DECIMAL(6,2) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `mealPlan_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `Plans` TINYINT(1) NOT NULL,
  PRIMARY KEY (`mealPlan_id`),
  INDEX `Plans_idx` (`Plans` ASC) VISIBLE,
  CONSTRAINT `fk_Plans_MealPlan`
    FOREIGN KEY (`Plans`)
    REFERENCES `mydb`.`Plans` (`plans_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `MealPlan` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `HealthPlan` ;

CREATE TABLE `HealthPlan` (
  `cost` INT NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `healthPlan_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `Plans` TINYINT(1) NOT NULL,
  PRIMARY KEY (`healthPlan_id`),
  INDEX `Plans_idx` (`Plans` ASC) VISIBLE,
  CONSTRAINT `fk_Plans_HealthPlan`
    FOREIGN KEY (`Plans`)
    REFERENCES `mydb`.`Plans` (`plans_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `HealthPlan` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Programs` ;

CREATE TABLE `Programs` (
  `program_name` VARCHAR(45) NOT NULL,
  `Services` TINYINT(1) NOT NULL,
  `programs_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`programs_id`),
  INDEX `Services_idx` (`Services` ASC) VISIBLE,
  CONSTRAINT `Services`
    FOREIGN KEY (`Services`)
    REFERENCES `mydb`.`Services` (`services_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Programs` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Organizations` ;

CREATE TABLE `Organizations` (
  `organization_name` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `organizations_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `Services` TINYINT(1) NOT NULL,
  PRIMARY KEY (`organizations_id`),
  INDEX `Services_idx` (`Services` ASC) VISIBLE,
  CONSTRAINT `fk_Services_Organizations`
    FOREIGN KEY (`Services`)
    REFERENCES `mydb`.`Services` (`services_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Organizations` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `PaymentType` ;

CREATE TABLE `PaymentType` (
  `billing_address` VARCHAR(45) NOT NULL,
  `billing_city` VARCHAR(45) NOT NULL,
  `billing_zipcode` VARCHAR(45) NOT NULL,
  `billing_state` VARCHAR(45) NOT NULL,
  `billing_country` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `paymentType_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`paymentType_id`))
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `PaymentType` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `CreditCardPayment` ;

CREATE TABLE `CreditCardPayment` (
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `card_number` CHAR(16) NOT NULL,
  `cvv` CHAR(3) NOT NULL,
  `expiration_date` VARCHAR(45) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `creditCardPayment_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `PaymentType` TINYINT(1) NOT NULL,
  UNIQUE INDEX `card_number_UNIQUE` (`card_number` ASC) VISIBLE,
  UNIQUE INDEX `cvv_UNIQUE` (`cvv` ASC) VISIBLE,
  PRIMARY KEY (`creditCardPayment_id`),
  INDEX `PaymentType_idx` (`PaymentType` ASC) VISIBLE,
  CONSTRAINT `fk_PaymentType_CreditCardPayment`
    FOREIGN KEY (`PaymentType`)
    REFERENCES `mydb`.`PaymentType` (`paymentType_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `CreditCardPayment` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `BankAccountPayment` ;

CREATE TABLE `BankAccountPayment` (
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `bank_account_number` INT NOT NULL,
  `routing_number` INT NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `BankAccountPayment_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `PaymentType` TINYINT(1) NOT NULL,
  PRIMARY KEY (`BankAccountPayment_id`),
  INDEX `PaymentType_idx` (`PaymentType` ASC) VISIBLE,
  CONSTRAINT `fk_PaymentType_BankAccountPayment`
    FOREIGN KEY (`PaymentType`)
    REFERENCES `mydb`.`PaymentType` (`paymentType_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `BankAccountPayment` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Scholarship` ;

CREATE TABLE `Scholarship` (
  `amount` INT NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `scholarship_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`scholarship_id`))
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Scholarship` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Account` ;

CREATE TABLE `Account` (
  `account_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `balance` DECIMAL(6,2) NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `User` TINYINT(1) NOT NULL,
  `PaymentType` TINYINT(1) NOT NULL,
  `Scholarship` TINYINT(1) NOT NULL,
  `Student` TINYINT(1) NOT NULL,
  PRIMARY KEY (`account_id`),
  INDEX `fk_User_idx` (`User` ASC) VISIBLE,
  INDEX `fk_Scholarship_idx` (`Scholarship` ASC) VISIBLE,
  INDEX `fk_Student_idx` (`Student` ASC) VISIBLE,
  INDEX `fk_paymentType_idx` (`PaymentType` ASC) VISIBLE,
  CONSTRAINT `fk_User_Account`
    FOREIGN KEY (`User`)
    REFERENCES `mydb`.`User` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Scholarship_Account`
    FOREIGN KEY (`Scholarship`)
    REFERENCES `mydb`.`Scholarship` (`scholarship_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Student_Account`
    FOREIGN KEY (`Student`)
    REFERENCES `mydb`.`Student` (`student_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_paymentType_Account`
    FOREIGN KEY (`PaymentType`)
    REFERENCES `mydb`.`PaymentType` (`paymentType_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Account` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `FinancialAid` ;

CREATE TABLE `FinancialAid` (
  `amount` INT NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `financialAid_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `Account` TINYINT(1) NOT NULL,
  PRIMARY KEY (`financialAid_id`),
  INDEX `Account_idx` (`Account` ASC) VISIBLE,
  CONSTRAINT `fk_Account_FinancialAid`
    FOREIGN KEY (`Account`)
    REFERENCES `mydb`.`Account` (`account_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `FinancialAid` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Loan` ;

CREATE TABLE `Loan` (
  `amount` INT NOT NULL,
  `language_id` TINYINT(1) NOT NULL,
  `loan_id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `Account` TINYINT(1) NOT NULL,
  PRIMARY KEY (`loan_id`),
  INDEX `Account_idx` (`Account` ASC) VISIBLE,
  CONSTRAINT `fk_Account_Loan`
    FOREIGN KEY (`Account`)
    REFERENCES `mydb`.`Account` (`account_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Loan` WRITE;

UNLOCK TABLES;

