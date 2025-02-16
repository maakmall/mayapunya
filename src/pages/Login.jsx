import logo from "/logo.svg";
import Input from "../components/Input.jsx";
import Label from "../components/Label.jsx";
import Button from "../components/Button.jsx";

export default function Login() {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex justify-center mx-auto">
          <img className="w-auto h-7 sm:h-8" src={logo} alt="Logo" />
        </div>

        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
          MayaPunya
        </h3>

        <form className="mt-6">
          <div>
            <Label field="username">Username</Label>
            <Input type="text" id="username" />
          </div>

          <div className="mt-4">
            <Label field="password">Password</Label>
            <Input type="password" id="password" />
          </div>

          <div className="mt-6">
            <Button className="w-full">Sign In</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
