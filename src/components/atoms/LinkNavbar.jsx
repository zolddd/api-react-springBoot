function LinkNavbar({LiClassName, AClassName, Ref, Name}) {
    return ( 
        <li className={LiClassName}>
              <a className={AClassName} href={Ref}>{Name}</a>
            </li>
     );
}

export default LinkNavbar;