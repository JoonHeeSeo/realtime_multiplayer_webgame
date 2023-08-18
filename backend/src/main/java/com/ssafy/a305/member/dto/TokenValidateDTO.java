package com.ssafy.a305.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TokenValidateDTO {
	private int memberId;
	private boolean valid;
}