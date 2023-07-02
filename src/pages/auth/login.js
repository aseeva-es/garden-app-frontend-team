import Head from "next/head";
import Form from "@/components/form/form";
import LayoutLeftImage from "../../../components/layoutLeftImage";
import Button from "@/components/button/button";
import Link from "next/link";

export default function Login() {
  const doSubmit = (formValue) => {
    console.warn(formValue);
  };

  return (
    <LayoutLeftImage>
      <Head>
        <title>Login</title>
      </Head>
      <div className="card px-10 py-20 shadow-xl min-w-[70%]">
        <div className="form ">
          <p className="text-xl mb-6">Sign in to PlantApp</p>
          <div className="flex flex-col w-full component-preview items-center gap-4 font-roboto">
            <Form
              onSubmit={doSubmit}
              fields={[
                {
                  type: "email",
                  placeholder: "Email",
                  name: "email",
                  label: "E-mail address",
                  required: true,
                },
                {
                  type: "password",
                  placeholder: "Password",
                  name: "password",
                  label: "Password",
                  required: true,
                },
              ]}
            >
              <div className="w-full items-end text-xs">
                <a className="link">Forgot your password?</a>
              </div>
              <div className="form-control w-full">
                <Button>SIGN IN</Button>      
              </div>
            </Form>

            <div className="form-control w-full ">
              <span className="flex flex-row justify-normal text-xs gap-2">
                <p>Have you not an account</p> <Link href = '/auth/signup' className="link">Sign up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </LayoutLeftImage>
  );
}

// Login.getLayout = function getLayout(page) {
//   return (
//     <Layout>
//       <Head>
//         <title>Login</title>
//       </Head>
//       <LayoutLeftImage>{page}</LayoutLeftImage>
//     </Layout>
//   );
// };
