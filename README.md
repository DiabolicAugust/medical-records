# medical-records

Project:

- Platform for managing medical records

Objective of the project:

- Develop a web application that provides the ability to maintain and manage medical records for patients and medical staff.

Backend:

- Implementation in NestJS to build a scalable and efficient backend.
- Using TypeScript to develop with static typing support.
- Storing data about users, medical records and other entities in a database, such as PostgreSQL or MongoDB.
- Authentication and authorization of users through JWT tokens.
- Implementation of an API to perform all the functions described above.

Patient/Patient model:

ID: Unique patient identifier.
First Name: Patient's name.
Last Name: Patient's last name.
Date of Birth: The patient's date of birth.
Gender: Patient's gender.
Address: Patient's residential address.
Contact Information: Phone number, email address and other contact information.

Model Medical Record:

ID: Unique identifier for the medical record.
Client ID: Link to the corresponding patient.
Creation Date: The date the medical record was created.
Update Date: The date the medical record was last updated.
Diagnosis: A doctor's conclusion about the patient's condition.
Treatment: Description of treatment and recommendations.
Medical Procedures: Medical procedures performed.
Prescriptions: Prescribed prescriptions and medications.
Test Results: Results of laboratory and instrumental examinations.
Notes: Additional notes or comments.

Model Medical History:

ID: Unique identifier for the medical record.
Client ID: Link to the corresponding patient.
Start Date: The date the disease or medical condition began.
End Date: The date the illness or medical condition ends (if applicable).
Diagnosis: A doctor’s conclusion about the patient’s condition at the onset of the disease.
Treatment: Description of treatment and recommendations.

Model Doctor (if necessary):

ID: Unique identifier of the healthcare worker.
First Name: The name of the healthcare professional.
Last Name: Last name of the health care worker.
Specialization: Specialization in a medical field (for example, physician, surgeon, etc.).
Contact Information: Phone number, email address and other contact information.

.env:
DATABASE\*URL = "postgres://morgana:windy@localhost:5432/records"
TYPEORM_MIGRATIONS = "src/docker/migrations"
ENTETIES = "src/\*\* /\_.entity.ts"
