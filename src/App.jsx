import MyComponent from "./components/MyComponent";
//import EmployeeDetails from "./components/EmployeeDetails";
import OrganizationDetails from "./components/OrganizationDetails";
import MountComponent from "./components/MountComponent";
import UpdateComponent from "./components/UpdateComponent";
import UnmountComponent from "./components/UnmountComponent";
import ParentComponent from "./components/ParentComponent";
import AnotherParent from "./components/AnotherParent";

function App() {
  return (
    <>
      <MyComponent />
      <OrganizationDetails />
      <br></br>
      <br></br>
      <MountComponent />
      <br></br>
      <br></br>
      <UpdateComponent />
      <br></br>
      <br></br>
      <UnmountComponent />
      <br></br>
      <br></br>
      <ParentComponent />
      <br></br>
      <br></br>
      <AnotherParent />
      <br></br>
      <br></br>
    </>
  );
}

export default App;
