import React from 'react'
import {Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {Form, Formik} from "formik";
import {InitialFieldValuesForCreate} from "../constants/InitialFieldValues";
import createUserSchema from "../constants/CreateUserSchema";

const UserCreateForm = ({openAdd, handleCloseClick, handleSubmitAddClick}) => {
    return (
        <Dialog open={openAdd} onClose={handleCloseClick} aria-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>
                Add new user
            </DialogTitle>
            <DialogContent>
                <Formik
                    initialValues={InitialFieldValuesForCreate}
                    validationSchema={createUserSchema}
                    validateOnChange={true}
                    validateOnBlur={true}
                    onSubmit={handleSubmitAddClick}
                >
                    {
                        ({
                             values,
                             errors,
                             touched,
                             handleChange,
                             handleBlur,
                             handleSubmit,
                         }) => (
                            <Box component={Form} sx={{mt: 3}} onSubmit={handleSubmit}>
                                <Container style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flexWrap: 'wrap',
                                }}>
                                    <TextField id="name"
                                               label="Name"
                                               autoComplete='name'
                                               name="Name"

                                               autoFocus
                                               type='text'
                                               variant="outlined"
                                               margin='normal'
                                               style={{borderRadius: "20px"}}


                                               onBlur={handleBlur}
                                               value={values.Name}
                                               onChange={handleChange}
                                    />
                                    <TextField id="email"
                                               label="Email"
                                               autoComplete='email'
                                               name="Email"

                                               type='email'
                                               variant="outlined"
                                               margin='normal'
                                               style={{borderRadius: "20px"}}

                                               onBlur={handleBlur}
                                               value={values.Email}
                                               onChange={handleChange}
                                    />
                                    <TextField id="roleName"
                                               label="RoleName"
                                               autoComplete='roleName'
                                               name="RoleName"

                                               type='text'
                                               variant="outlined"
                                               margin='normal'
                                               style={{borderRadius: "20px"}}

                                               onBlur={handleBlur}
                                               value={values.RoleName}
                                               onChange={handleChange}
                                    />
                                    <TextField id="password"
                                               label="Password"
                                               autoComplete='current-password'
                                               name="Password"


                                               type='password'
                                               variant="outlined"
                                               margin='normal'
                                               style={{borderRadius: "20px"}}

                                               onBlur={handleBlur}
                                               value={values.Password}
                                               onChange={handleChange}
                                    />
                                    <TextField id="confirmPassword"
                                               label="ConfirmPassword"
                                               autoComplete='current-password'
                                               name="ConfirmPassword"


                                               type='password'
                                               variant="outlined"
                                               margin='normal'
                                               style={{borderRadius: "20px"}}

                                               onBlur={handleBlur}
                                               value={values.ConfirmPassword}
                                               onChange={handleChange}
                                    />
                                </Container>
                                <DialogActions>
                                    <Button onClick={handleCloseClick} color='primary'>
                                        Cancel
                                    </Button>
                                    <Button type="submit" color='primary'>
                                        Add
                                    </Button>
                                </DialogActions>
                            </Box>
                        )}
                </Formik>
            </DialogContent>
        </Dialog>
    )
}

export default UserCreateForm;