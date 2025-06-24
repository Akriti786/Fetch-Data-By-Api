//BY BOOTSTRAP INSTALLATION //

// import "./App.css";
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:2000/getUsers')
//       .then(users => setUsers(users.data))
//       .catch(err => console.error(err))
//   }, []);

//   return (
//     <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
//       <div className="w-50">
//       <table className="table">
//         <thead>
//           <tr>
//             <th>
//               Name
//             </th>
//             <th>
//               Email
//             </th>
//             <th>
//               Age
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             users.map(user => {
//               return<tr key={index}>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.age}</td>
//               </tr>
//             })
//           }
//         </tbody>
//       </table>
//     </div>
//     </div>
//   );
// }

// export default App;










// MATERIAL UI //

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  Box
} from '@mui/material';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:2000/getUsers')
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        User List
      </Typography>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell><strong>Age</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}

export default App;
