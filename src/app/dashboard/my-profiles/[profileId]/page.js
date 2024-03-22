import Profile from "@/models/Profile";
import AddProfilePage from "@/template/AddProfilePage";
import connectDB from "@/utils/connectDB";

async function Edit({ params: { profileId } }) {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  if (!profile) return <p>مشکلی پیش آمده است. لطفا دوباره امتحان کنید ...</p>;

  return <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />;
}

export default Edit;
