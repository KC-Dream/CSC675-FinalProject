-- Script name: inserts.sql

-- Author: Kevin Zhou

-- Purpose: insert sample data to test the integrity of this database system

-- the database used to insert the data into.

USE mydb;

-- DROP DATABASE myDB;

-- INSERT INTO School () VALUES (), (), ();

INSERT INTO School (
school_id, 
school_name, 
language_id) 
VALUES 
(4, 'San Francisco State University', 1), 
(5, 'City College of San Francisco', 2), 
(6, 'San Jose State University', 3);

-- INSERT INTO Course () VALUES (), (), ();

INSERT INTO Course (
  course_id,
  course_name,
  prerequisites,
  number_of_seats,
  number_of_exams,
  materials,
  language_id) 
  VALUES 
  (1, 'csc675', 'csc413', '40', '1', 'computer', 1), 
  (2, 'csc648', 'csc413', '48', '1', 'computer', 2), 
  (3, 'csc642', 'csc413', '40', '1', 'computer', 3);
  
  -- INSERT INTO Major () VALUES (), (), ();
  
  INSERT INTO Major (
  major_name,
  language_id,
  major_id)
  VALUES 
  ('computer science', 1, 1), 
  ('business marketing', 2, 2), 
  ('engineering', 3, 3);
  
  -- INSERT INTO Certificate () VALUES (), (), ();
  
  INSERT INTO Certificate (
  certificate_name,
  language_id,
  certificate_id) 
  VALUES 
  ('Carpenter Certificate', 1, 1), 
  ('Cooking Certificate', 2, 2), 
  ('Nursing Certificate', 3, 3);
  
-- INSERT INTO Degree () VALUES (), (), ();
  
INSERT INTO Degree (
degree_type,
language_id,
degree_id) 
VALUES 
('Business', 1, 1), 
('Computer Science', 2, 2), 
('Biology', 3, 3);
  
-- INSERT INTO Services () VALUES (), (), ();

INSERT INTO Services (
language_id,
services_id) 
VALUES 
(1, 1), 
(2, 2), 
(3, 3);

-- INSERT INTO Transcript () VALUES (), (), ();

INSERT INTO Transcript (
firstname,
lastname,
gpa,
units_completed,
language_id,
transcript_id
) 
VALUES 
('kevin', 'smith', 3.5, 110, 1, 1), 
('spongebob', 'squarepants', 3.9, 50, 2, 2), 
('tom and', 'jerry', 4.5, 96, 3, 3);

-- INSERT INTO Student () VALUES (), (), ();

INSERT INTO Student (
student_id,
firstname,
lastname,
language_id,
School,
Course,
Major,
Certificate,
Degree,
Services,
Transcript
) 
VALUES
-- Notice: These are last names, not traits, my last name is made from 2020 
(1, 'kevin', 'is sad about 2020 year', 1, 1, 1, 1, 1, 1, 1, 1), 
(2, 'kevinz', 'contacted doctor many times', 2, 2, 2, 2, 2, 2, 2, 2), 
(3, 'kevin', 'rich one day', 2, 2, 2, 2, 2, 2, 2, 2);

-- INSERT INTO user2 () VALUES (), (), ();

INSERT INTO User (
user_id,
firstname,
lastname,
email,
language_id,
password
) 
VALUES 
(1, 'bruce', 'lee', 'brucelee@mail.kevinSU.edu', 1, '123456789'), 
(2, 'steve', 'jobs', 'stevejobsmadeiphones@mail.xx', 2, '1234567'), 
(3, 'iren', 'bottle', '123@gmail.com', 3, 'hello');

-- INSERT INTO Languages () VALUES (), (), ();

INSERT INTO Languages (
languages_name,
languages_id
) 
VALUES 
('american english', 1), 
('chinese simplified', 2), 
('mexican spanish', 3);

-- INSERT INTO Admin () VALUES (), (), ();

INSERT INTO Admin (
firstname,
lastname,
language_id,
admin_id
) 
VALUES 
('alligator', 'rick', 1, 1), 
('pickle', 'nick', 2, 2), 
('norty', 'smith', 3, 3);

-- INSERT INTO SupportTeam () VALUES (), (), ();

INSERT INTO SupportTeam (
firstname,
lastname,
phone_number,
language_id,
supportTeam_id
) 
VALUES 
('li', 'peng', 4151234567, 1, 1), 
('yeah', 'smith', 4150002222, 2, 2), 
('ricky', 'steve', 4151116996, 3, 3);

-- INSERT INTO Teacher () VALUES (), (), ();

INSERT INTO Teacher (
firstname,
lastname,
department,
phone_number,
email,
language_id,
teacher_id
) 
VALUES 
-- Note: These are all random data to be tested, I Like putting random information all in data
('love', 'what i got in life', 'pray', 0123456789, 'lovewhatyouhaveinlife@love.com', 1, 1), 
('accept', 'your present', 'gifting', 9999999999, 'acceptgifts@love.com', 2, 2), 
('jimmy', 'mimmel', 'comedy', 6969696910, 'bollywood123@love.com', 3, 3);

-- INSERT INTO PoliceOfficer () VALUES (), (), ();

INSERT INTO PoliceOfficer (
firstname,
lastname,
language_id,
policeOfficer_id
) 
VALUES 
('roger', 'laser', 1, 1), 
('raining', 'cloudz', 2, 2), 
('prius', 'octupus', 3, 3);

-- INSERT INTO NetworkSecuritySpecialist () VALUES (), (), ();

INSERT INTO NetworkSecuritySpecialist (
firstname,
lastname,
language_id,
networkSecuritySpecialist_id
) 
VALUES 
('sugert', 'alien', 1, 1), 
('tofu', 'lee', 2, 2), 
('ler', 'icey', 3, 3);

-- INSERT INTO Counselor () VALUES (), (), ();

INSERT INTO Counselor (
firstname,
lastname,
department,
language_id,
counselor_id
) 
VALUES 
('blueberry', 'jakes', 'science', 1, 1), 
('slate', 'reto', 'math', 2, 2), 
('bearie', 'lakes', 'business', 3, 3);

-- INSERT INTO President () VALUES (), (), ();

INSERT INTO President (
firstname,
lastname,
language_id,
president_id
) 
VALUES 
('caitlyn', 'yummi league', 1, 1), 
('rammus', 'okay science', 2, 2), 
('lux', 'rainbow color', 3, 3);

-- INSERT INTO Employee () VALUES (), (), ();

INSERT INTO Employee (
employee_id,
occupation,
language_id,
School,
Admin,
SupportTeam,
Teacher,
PoliceOfficer,
NetworkSecuritySpecialist,
Counselor,
President
) 
VALUES 
(1, 'Teacher', 1, 1, 1, 1, 1, 1, 1, 1, 1), 
(2, 'Admin', 2, 2, 2, 2, 2, 2, 2, 2, 2), 
(3, 'Counselor', 3, 3, 3, 3, 3, 3, 3, 3, 3);

-- INSERT INTO TeachingAssistant () VALUES (), (), ();

INSERT INTO TeachingAssistant (
firstname,
lastname,
language_id,
teachingAssistant_id,
Student
) 
VALUES 
('raymond', 'stomach', 1, 1, 1), 
('queenie', 'lopez', 2, 2, 2), 
('curious george', 'tv lopez', 3, 3, 3);

-- INSERT INTO CommunityCollege () VALUES (), (), ();

INSERT INTO CommunityCollege (
highest_degree,
cost,
language_id,
communityCollege_id,
School
) 
VALUES 
('Associates', 1100, 1, 1, 2), 
('Associates', 900, 2, 2, 2), 
('Associates', 1000, 3, 3, 3);

-- INSERT INTO University () VALUES (), (), ();

INSERT INTO University (
highest_degree,
cost,
language_id,
university_id,
School
) 
VALUES 
('Masters', 4000, 1, 1, 1), 
('Phd', 4000, 2, 2, 3), 
('Masters', 4000, 3, 3, 3);

-- INSERT INTO RoomType () VALUES (), (), ();

INSERT INTO RoomType (
size,
language_id,
RoomType_id
) 
VALUES 
(500, 1, 1), 
(900, 2, 2), 
(9000, 3, 3);

-- INSERT INTO Rooms () VALUES (), (), ();

INSERT INTO Rooms (
Room_number,
location,
floor,
language_id,
rooms_id,
RoomType,
School
) 
VALUES 
(101, 'science building', 1, 1, 1, 1, 1), 
(102, 'business building', 1, 2, 2, 2, 2), 
(203, 'science building', 2, 3, 3, 3, 3);

-- INSERT INTO Classroom () VALUES (), (), ();

INSERT INTO Classroom (
classroom_name,
language_id,
classroom_id,
RoomType
) 
VALUES 
('art', 1, 1, 1), 
('math', 2, 2, 2), 
('history', 3, 3, 3);

-- INSERT INTO Auditorium () VALUES (), (), ();

INSERT INTO Auditorium (
auditorium_name,
language_id,
auditorium_id,
RoomType
) 
VALUES 
('big auditorium', 1, 1, 1), 
('music auditorium', 2, 2, 2), 
('sports auditorium', 3, 3, 3);

-- INSERT INTO Labatory () VALUES (), (), ();

INSERT INTO Labatory (
labatory_name,
language_id,
labatory_id,
RoomType
) 
VALUES 
('sciene lab', 1, 1, 1), 
('math lab', 2, 2, 2), 
('computer science lab', 3, 3, 3);

 -- INSERT INTO Office () VALUES (), (), ();
 
INSERT INTO Office (
office_name,
language_id,
office_id,
RoomType
) 
VALUES 
('admin', 1, 1, 1), 
('billing', 2, 2, 2), 
('counselor', 3, 3, 3);

-- INSERT INTO Cafeteria () VALUES (), (), ();

INSERT INTO Cafeteria (
cafeteria_name,
language_id,
cafeteria_id,
RoomType
) 
VALUES 
('breakfast', 1, 1, 1), 
('chinese food', 2, 2, 2), 
('mexican food', 3, 3, 3);

-- INSERT INTO HealthRoom () VALUES (), (), ();

INSERT INTO HealthRoom (
healthroom,
language_id,
healthRoom_id,
RoomType
) 
VALUES 
('nurse', 1, 1, 1), 
('dentist', 2, 2, 2), 
('doctor', 3, 3, 3);

-- INSERT INTO Library () VALUES (), (), ();

INSERT INTO Library (
library_name,
language_id,
library_id,
RoomType
) 
VALUES 
('Martin Luther King', 1, 1, 1), 
('Childrens', 2, 2, 2), 
('public', 3, 3, 3);

-- INSERT INTO StudentEvaluation` () VALUES (), (), ();

INSERT INTO StudentEvaluation (
studentEvaluation_id,
evaluation_name,
language_id,
Student
) 
VALUES 
(1, 'computer sciene eval', 1, 1), 
(2, 'physics teacher eval', 2, 2), 
(3, 'math teacher eval', 3, 3);

-- INSERT INTO Department () VALUES (), (), ();

INSERT INTO Department (
department_name,
location,
language_id,
department_id,
School
) 
VALUES 
('computer science', 'computer science building', '1', 1, 1), 
('cscience', 'science building', '2', 2, 2), 
('math', 'math', '3', 3, 3);

-- INSERT INTO CourseSection () VALUES (), (), ();

INSERT INTO CourseSection (
section_number,
language_id,
courseSection_id,
Course
) 
VALUES 
(1, '1', 1, 1), 
(2, '2', 2, 2), 
(3, '3', 3, 3);

-- INSERT INTO CourseDescription () VALUES (), (), ();

INSERT INTO CourseDescription (
course_name,
course_description,
language_id,
courseDescription_id,
Course
) 
VALUES 
('CSC675', 'learning SQL and ERD Diagram and EER Model', 1, 1, 1), 
('CSC648', 'Work as team to build a APP', 2, 2, 2), 
('CSC690', 'Build Mobile Apps', 3, 3, 3);

-- INSERT INTO Schedule () VALUES (), (), ();

INSERT INTO Schedule (
year,
month,
language_id,
Schedule_id,
School
) 
VALUES 
(2020, 01, 1, 1, 1), 
(2020, 02, 2, 2, 2), 
(2020, 03, 3, 3, 3);

-- INSERT INTO SchoolCalendar () VALUES (), (), ();

INSERT INTO SchoolCalendar (
term,
holidays,
language_id,
schoolCalendar_id,
Schedule
) 
VALUES 
('fall', 5, 1, 1, 1), 
('summer', 2, 2, 2, 2), 
('spring', 6, 3, 3, 3);

-- INSERT INTO CourseSchedule () VALUES (), (), ();

INSERT INTO CourseSchedule (
days,
language_id,
courseSchedule_id,
Course,
Schedule
) 
VALUES 
(1, 1, 1, 1, 1), 
(2, 2, 2, 2, 2), 
(3, 3, 3, 3, 3);

-- INSERT INTO ClubMeeting () VALUES (), (), ();

INSERT INTO ClubMeeting (
days,
language_id,
clubMeeting_id,
Schedule
) 
VALUES 
("tuesday thursday", 1, 1, 1), 
("monday wednesdday", 2, 2, 2), 
("tuesday thursday", 3, 3, 3);

-- INSERT INTO Syllabus () VALUES (), (), ();

INSERT INTO Syllabus (
syllabus_name,
semester_term,
language_id,
syllabus_id,
Course
) 
VALUES 
('database syllabus', 'summer', 1, 1, 1), 
('database syllabus', 'summer', 2, 2, 2), 
('database syllabus', 'spring', 3, 3, 3);

-- INSERT INTO Subjects () VALUES (), (), ();

INSERT INTO Subjects (
subject_name,
language_id,
subjects_id,
Course
) 
VALUES 
('math', 1, 1, 1), 
('science', 2, 2, 2), 
('history', 3, 3, 3);

-- INSERT INTO Plans () VALUES (), (), ();

INSERT INTO Plans (
plan_name,
language_id,
plans_id,
Services
) 
VALUES 
('donalds', 1, 1, 1), 
('jennys', 2, 2, 2), 
('sparkys', 3, 3, 3);

-- INSERT INTO MealPlan () VALUES (), (), ();

INSERT INTO MealPlan (
cost,
language_id,
mealPlan_id,
Plans
) 
VALUES 
(900.62, 1, 1, 1), 
(700.52, 2, 2, 2), 
(500.99, 3, 3, 3);

-- INSERT INTO HealthPlan () VALUES (), (), ();

INSERT INTO HealthPlan (
cost,
language_id,
healthPlan_id,
Plans
) 
VALUES 
(1900.00, 1, 1, 1), 
(2900.00, 2, 2, 2), 
(3900.00, 3, 3, 3);

-- INSERT INTO Programs () VALUES (), (), ();

INSERT INTO Programs (
program_name,
Services
) 
VALUES 
('self help', 1), 
('low income', 2), 
('disability', 3);

-- INSERT INTO Organizations () VALUES (), (), ();

INSERT INTO Organizations (
organization_name,
language_id,
organizations_id,
Services
) 
VALUES 
('panthers', 1, 1, 1), 
('leopards', 2, 2, 2), 
('food support', 3, 3, 3);

-- INSERT INTO PaymentType () VALUES (), (), ();

INSERT INTO PaymentType (
billing_address,
billing_city,
billing_zipcode,
billing_state,
billing_country,
language_id,
paymentType_id
) 
VALUES 
('123 Geary Street', 'San Francisco', '94121', 'CA', 'US', 1, 1), 
('321 Frank Street', 'San Francisco', '94112', 'CA', 'US', 2, 2), 
('782 Shark Street', 'Los Angeles', '96221', 'CA', 'US', 3, 3);

-- INSERT INTO CreditCardPayment () VALUES (), (), ();

INSERT INTO CreditCardPayment (
firstname,
lastname,
card_number,
cvv,
expiration_date,
language_id,
creditCardPayment_id,
PaymentType
) 
VALUES 
('Marty', 'Lopez', 9236122428514419, 143, '06/2024', 1, 1, 1),
('Steven', 'Mera', 6312555967469125, 363, '09/2027', 2, 2, 2), 
('Larry', 'Lobster', 9022765142681715, 938, '02/2022', 3, 3, 3);

-- INSERT INTO BankAccountPayment () VALUES (), (), ();

INSERT INTO BankAccountPayment (
firstname,
lastname,
bank_account_number,
routing_number,
language_id,
BankAccountPayment_id,
PaymentType
) 
VALUES 
-- 9 digits bank account number
-- routing number 8 digits
('karen', 'lee', 49528793, 25003793, 1, 1, 1), 
('karen', 'lee', 39581741, 57824466, 2, 2, 2), 
('karen', 'lee', 52497162, 96885029, 3, 3, 3);

-- INSERT INTO Scholarship () VALUES (), (), ();

INSERT INTO Scholarship (
amount,
language_id,
scholarship_id
) 
VALUES 
(2900, 1, 1), 
(3000, 2, 2), 
(10000, 3, 3);

-- INSERT INTO Account () VALUES (), (), ();

INSERT INTO Account (
account_id,
firstname,
lastname,
balance,
language_id,
user2,
PaymentType,
Scholarship,
Student
) 
VALUES 
(1, 'roy', 'link', 677.97, 1, 1, 1, 1, 1), 
(2, 'pikachu', 'mew', 473.97, 2, 2, 2, 2, 2), 
(3, 'roy', 'link', 377.01, 3, 3, 3, 3, 3);

-- INSERT INTO FinancialAid () VALUES (), (), ();

INSERT INTO FinancialAid (
amount,
language_id,
financialAid_id,
Account
) 
VALUES 
(10000, 1, 1, 1), 
(5000, 2, 2, 2), 
(9000, 3, 3, 3);

-- INSERT INTO Loan () VALUES (), (), ();

INSERT INTO Loan (
amount,
language_id,
loan_id,
Account
) 
VALUES
(12000, 1, 1, 1), 
(27000, 2, 2, 2), 
(15000, 3, 3, 3);





