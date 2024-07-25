// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import { addTodo, deleteTodoById, getTodo } from "layouts/pages/todo/service";
import { useEffect, useState } from "react";
// Routes
import routes from "routes";
// Images

function Todo() {
  const [todos, setTodo] = useState([]),
    [newTodo, setNewTodo] = useState(""),
    [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getTodo(setTodo);
  }, [refresh]);

  let todoElements;

  if (todos.length === 0) {
    todoElements = <MKTypography variant="h3">No todos found</MKTypography>;
  } else {
    const allTodos = todos.map((todo, index) => (
      <Stack direction="row" spacing={1} mt={3} key={index} justifyContent="space-between">
        <MKTypography variant="h4">{todo.todo}</MKTypography>
        <MKButton onClick={() => deleteTodoById(todo.id, () => setRefresh(!refresh))}>
          Clear
        </MKButton>
      </Stack>
    ));
    todoElements = (
      <>
        <MKTypography variant="h3">Following are the todos</MKTypography>
        {allTodos}
      </>
    );
  }

  return (
    <MKBox component="header" position="relative">
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-pro-react",
          label: "buy now",
          color: "info",
        }}
        sticky
      />
      <MKBox
        display="flex"
        alignItems="center"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(rgba(gradients.light.main, 0.5), rgba(gradients.light.state, 0.5))}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} md={7} lg={6} flexDirection="column" justifyContent="center">
            <MKTypography
              variant="h1"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Todo List
            </MKTypography>
            <MKInput
              label="Write your todo ...."
              pr={6}
              mr={6}
              value={newTodo}
              onChange={(event) => setNewTodo(event.target.value)}
            />

            <Stack direction="row" spacing={1} mt={3}>
              <MKButton
                onClick={() => {
                  addTodo(newTodo, () => {
                    setRefresh(!refresh);
                    setNewTodo("");
                  });
                }}
              >
                Add
              </MKButton>
            </Stack>

            <br />

            {todoElements}
          </Grid>
        </Container>
      </MKBox>
      <MKBox pt={6} px={1}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </MKBox>
  );
}

export default Todo;
