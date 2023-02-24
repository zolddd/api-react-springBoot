

export default function FormRegisterTeacher() {
  return (
    <div>
      <Formik
        initialValues={{ name: "", lastName: "", password: "" }}
        onSubmit={async (values, actions) => {
          try {
            const response = await createStudent(values);
            console.log(values);
            actions.resetForm();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Write a you name"
              onChange={handleChange}
              value={values.name}
            />
            <label>Last name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Write a your last name"
              onChange={handleChange}
              value={values.lastName}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Write a your password"
              onChange={handleChange}
              value={values.password}
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving.." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
