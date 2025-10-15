import MyComponent from "./components/MyComponent";
//import EmployeeDetails from "./components/EmployeeDetails";
import OrganizationDetails from "./components/OrganizationDetails";
import MountComponent from "./components/MountComponent";
import UpdateComponent from "./components/UpdateComponent";
import UnmountComponent from "./components/UnmountComponent";

function App(){
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
    </>
  );
}
export default App;
