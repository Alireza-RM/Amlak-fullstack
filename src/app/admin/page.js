import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import DashboardSidebar from "@/layout/DashboardSidebar";
import AdminPage from "@/template/AdminPage";
import Profile from "@/models/Profile";



export const metadata = {
  title: "پنل ادمین املاک",
};

async function Admin() {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  const user = await User.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/dashboard");

  const profile = await Profile.find({ published: false });

  return (
    <DashboardSidebar role={user.role} email={user.email}>
      <AdminPage profile={profile} />
    </DashboardSidebar>
  );
}

export default Admin;
