// import { useFirestoreCollectionData } from "reactfire";
// import firebase_app from "../firebase/config";
// import Student from "../types/student";
// import {
//     query,
//     collection,
//     QueryDocumentSnapshot,
//     DocumentData,
// } from "firebase/firestore";
// import { FirestoreDataConverter } from "firebase/firestore";

// const studentConverter: FirestoreDataConverter<Student> = {
//     toFirestore(student: Student): DocumentData {
//         return {
//             id: student.id,
//             FirstName: student.FirstName,
//             LastName: student.LastName,
//         };
//     },
//     fromFirestore(snapshot: QueryDocumentSnapshot): Student {
//         const data = snapshot.data();
//         return {
//             id: snapshot.id,
//             FirstName: data.FirstName,
//             LastName: data.LastName,
//         };
//     },
// };

// export default function useFetchStudents() {
//     const studentsQuery = query(collection(db, "student")).withConverter(
//         studentConverter
//     );
//     const { data: students } = useFirestoreCollectionData<Student>(
//         studentsQuery,
//         {
//             idField: "id",
//         }
//     );

//     return students;
// }
