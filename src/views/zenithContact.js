import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Formik, Field } from 'formik'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
    Input
  } from "@chakra-ui/core";

const styles = theme => ({
    root: {
        // color: 'red',
        background: 'rgb(245, 245, 245)',
        // background: `url('https://i.imgur.com/ZXBtVw7.jpg') no-repeat center center`,
    },
    form: {
        width: '80%',
        height: '80vh',
        paddingLeft: 10,
    },
    title: {
        textAlign: 'center',
        paddingTop: 12,
    },
});

function ZenithContact(props) {
    const { classes } = props;

    function validateName(value) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (value.length < 3) {
            error = 'Name too short';
        }
        return error;
    }

    function validateEmail(value) {
        let error;
        if (!value) {
          error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Invalid email address';
        }
        return error;
      }
      
  
    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.title}>
                Contact Us
            </Typography>
            <section className={classes.form}>
            <Formik
                initialValues={{ name: "", email: "", message: "" }}
                onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000);
                }}
                render={props => (
                <form onSubmit={props.handleSubmit}>
                    <Field
                    name="name"
                    validate={validateName}
                    render={({ field, form }) => (
                        <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel htmlFor="name">Full name</FormLabel>
                        <Input {...field} id="name" placeholder="name" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                    )}
                    />
                    <Field
                    name="email"
                    validate={validateEmail}
                    render={({ field, form }) => (
                        <FormControl isInvalid={form.errors.email && form.touched.email}>
                        <FormLabel htmlFor="email">Email address</FormLabel>
                        <Input {...field} id="email" placeholder="email" />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                        </FormControl>
                    )}
                    />
                    <Field
                    name="message"
                    as="textarea"
                    rows={4}
                    render={({ field, form }) => (
                        <FormControl isInvalid={form.errors.message && form.touched.message}>
                        <FormLabel htmlFor="message">Message</FormLabel>
                        <Input {...field} id="message" placeholder="Your message" />
                        <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                        </FormControl>
                    )}
                    />
                    <Button
                    mt={4}
                    variantColor="teal"
                    isLoading={props.isSubmitting}
                    type="submit"
                    >
                    Submit
                    </Button>
                </form>
                )}
            />
            </section>
        </div>
    );
  }

ZenithContact.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ZenithContact);

