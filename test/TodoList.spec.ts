import TodoList from "../src/TodoList";

describe("TodoList", () => {
  describe("値を1つ追加する場合", () => {
    const todoList = new TodoList();
    todoList.addTodo("禁酒");

    test("値がすべて取得できること", () => {
      expect(todoList.getAllTodos()).toEqual(["禁酒"]);
    });

    test("要素を指定して値が取得できること", () => {
      expect(todoList.getTodoAtIndex(0)).toBe("禁酒");
    });

    test("値を取得する際に存在しない要素を指定した場合、undefinedを返すこと", () => {
      expect(todoList.getTodoAtIndex(1)).toBeUndefined();
    });

    test("値を削除する際に存在しない要素を指定した場合、何も変わらないこと", () => {
      todoList.removeTodoAtIndex(1);
      expect(todoList.getAllTodos()).toEqual(["禁酒"]);
    });

    test("値を削除した場合、空配列になること", () => {
      todoList.removeTodoAtIndex(0);
      expect(todoList.getAllTodos()).toEqual([]);
    });
  });

  describe("値を複数追加する場合", () => {
    const todoList = new TodoList();
    todoList.addTodo("禁酒");
    todoList.addTodo("禁煙");
    todoList.addTodo("健康");

    test("値がすべて取得できること", () => {
      expect(todoList.getAllTodos()).toEqual(["禁酒", "禁煙", "健康"]);
    });

    test("要素を指定して値が取得できること", () => {
      expect(todoList.getTodoAtIndex(1)).toBe("禁煙");
    });

    test("値を削除した場合、残りの要素が残っていること", () => {
      todoList.removeTodoAtIndex(0);
      expect(todoList.getAllTodos()).toEqual(["禁煙", "健康"]);
    });
  });
});
