type Props = {
  handleChangeView: (view: string) => void;
};



const MenuDrawer = ({handleChangeView}: Props) => {
  const [show, setShow] = useState(false);
  const toggleDraw = () => setShow(!show);
  const user = useAppSelector((state) => state.user.user);
  const emailUser = useAppSelector((state) => state.emailUser.emailUser);
  const menu = drawerMenu(handleChangeView)
  
  return (
    <div className={styles.container}>
      <Button onClick={toggleDraw}><SettingsOutlinedIcon /></Button>
      <Drawer anchor="left" open={show} onClose={toggleDraw}>
        <Box sx={{ height: "100vh" }} >
          <List>
            <div className={styles.logoContainer}>
            {emailUser
              ? 
              <UserIcon userName={emailUser.displayName} />
              :
              <img src={user?.photo} alt="ユーザーアイコン" />
            }
            </div>
            <Divider />
            {menu.map((obj) => {
              const Icon = obj.icon;
              return (
                <ListItem key={obj.title}>
                  <ListItemButton onClick={obj.onClick}>
                    <ListItemIcon><Icon /></ListItemIcon>
                    <ListItemText primary={obj.title}/>
                    {obj.title === "ユーザー情報" && <UserInfoModal />}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
