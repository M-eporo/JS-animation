const AlertDialog = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  const handleDelete = async ( ) => {
   try {
     await auth.currentUser?.delete();
   } catch(err) {
     if(err.code){

     }
   }
  };
  const deleteUserData = async () => {
    try {
      await delete(doc(db, "user", auth.currentUser.uid);
    } catch(err) {

    }
  };
  
  const user = useAppSelector((state) => state.user.user);
  return (
      <IconButton onClick={handleOpen}><Icon/></IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        arial-descsribedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {アカウント登録削除}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {アカウントを削除するとスケジュールは全て削除されます。よろしいですか？。}
          </DialogContentText>
        </DialogContent>
          
        <DialogActions>
          <Button onClick={handleClose} autoFocus>キャンセル</Button>
          <Button onClick={}>削除</Button>
        </DialogActions>
      </Dialog>
  );
};
export default AlertDialog;	

