import authReducer from "../../reducers/auth";

test("should set default state", () => {
    const action = { type: "@@INIT" };
    const state = authReducer(undefined, action);

    expect(state).toEqual({});
});

test("should set login state", () => {
    const uid = " qwerty123456";

    const action = {
        type: "LOGIN",
        uid
    };

    const state = authReducer({}, action);

    expect(state).toEqual({ uid });
});

test("should set logout state", () => {
    const uid = "qwerty123456";
    const action = {
        type: "LOGOUT"
    };

    const state = authReducer({ uid }, action);
    expect(state).toEqual({});
});
