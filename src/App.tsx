
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/*<Route path="/app">*/}
            {/*    <Route index={true} element={<AppDashboard/>}/>*/}
            {/*    <Route path="messages">*/}
            {/*        <Route index={true} element={<MessageList/>}/>*/}
            {/*        <Route path="create" element={<ComposeMessage/>}/>*/}
            {/*    </Route>*/}
            {/*    <Route path="contacts">*/}
            {/*        <Route index={true} element={<ContactsList/>}/>*/}
            {/*        <Route path="create" element={<CreateContact/>}/>*/}
            {/*        <Route path=":id" element={<UpdateContactComponent/>}/>*/}
            {/*        <Route path="upload" element={<UploadContactsComponents/>}/>*/}
            {/*    </Route>*/}
            {/*    <Route path="groups">*/}
            {/*        <Route index={true} element={<GroupList/>}/>*/}
            {/*        <Route path="create" element={<CreateGroup/>}/>*/}
            {/*        <Route path=":id" element={<UpdateGroup/>}/>*/}
            {/*    </Route>*/}

            {/*    <Route path="billing">*/}
            {/*        <Route index={true} element={<AllPayments/>}/>*/}
            {/*        <Route path="create" element={<TopUp/>}/>*/}
            {/*    </Route>*/}
            {/*    <Route path={"need-top-up"} element={<NeedTopUpMessage/>}/>*/}
            {/*</Route>*/}

            {/*<Route path={"/login"} element={<Login/>}/>*/}
            {/*<Route path={"/signup"} element={<SignUp/>}/>*/}
            {/*<Route path="*" element={<NotFound/>}/>*/}

        </Routes>
    </>
  )
}

export default App
