import getCurrentUser from "@/actions/getCurrentUser";
import EditUser from "@/app/components/admin/user/EditUser"

const EditUserPage = async() => {
    const currentUser = await getCurrentUser();

  return (
    <>
      <EditUser currentUser={currentUser}/>
    </>
  )
}

export default EditUserPage