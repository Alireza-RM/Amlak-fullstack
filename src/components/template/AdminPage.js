import AdminCard from "@/module/AdminCard";
import styles from "@/template/AdminPage.module.css";

function AdminPage({ profile }) {
  return (
    <div>
      {profile.length ? null : (
        <p className={styles.text}>هیچ آگهی در انتظار تاییدی وجود ندارد</p>
      )}
      {profile.map((i) => (
        <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}

export default AdminPage;
