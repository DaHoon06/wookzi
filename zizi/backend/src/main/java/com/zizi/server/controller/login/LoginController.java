package com.zizi.server.controller.login;

import com.zizi.server.LoginDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController     /* Json 형태로 데이터를 주고 받기 위해 Rest 사용 */
@RequiredArgsConstructor    /* Autowired 사용하지 않고 의존성 주입 */
public class LoginController {
    @PostMapping(value = "/api/login")
    public LoginDTO login(@RequestBody LoginDTO loginDTO) {
        System.out.println(loginDTO);
        return loginDTO;
    }
}
