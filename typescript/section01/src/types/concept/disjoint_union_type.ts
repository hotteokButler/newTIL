/**
 * # 서로소 유니온 타입 (Disjoint Union Type)
 * - 서로소  : 수학에서 서로소는 공통된 요소가 없는 두 집합을 의미. 프로그래밍에서는 서로소 유니온 타입에서 각 타입들이 서로 겹치지 않는다는 것을 의미
 *        => 공통점(교집합)이 하나도 없는 타입
 */

// tag라는 프로퍼티는 string literal 타입으로 정의되어 있기 때문에 교집합에 해당하는 것이 존재할 수 없음
// 세개의 타입은 서로소의 관계가 된다
//
type Admin = {
	tag: 'ADMIN';
	name: string;
	kickCount: number;
};
type Member = {
	tag: 'MEMBER';
	name: string;
	point: number;
};
type Guest = {
	tag: 'GUEST';
	name: string;
	visitCount: number;
};

type User = Admin | Member | Guest;
type User1 = Admin & Member & Guest; // 교집합이 없으므로 공집합 never이 된다

function login(user: User) {
	if (user.tag === 'ADMIN') {
		//  'kickCount' in user로 확인하는 것 보다 더 직관적이다.
		// admin
		console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다.`);
	} else if (user.tag === 'MEMBER') {
		// member
		console.log(`${user.name}님 현재까지 ${user.point}포인트 적립되었습니다.`);
	} else {
		// guest
		console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
	}
}

function refactor_login(user: User) {
	// 직관적으로 switch를 활용하여 직관적
	switch (user.tag) {
		case 'ADMIN':
			console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다.`);
			break;
		case 'MEMBER':
			console.log(`${user.name}님 현재까지 ${user.point}포인트 적립되었습니다.`);
			break;
		case 'GUEST':
			console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
			break;
	}
}
