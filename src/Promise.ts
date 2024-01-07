// https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_readfile_file_options_callback
const fs = require("fs");

/**
 * foo.txt -> bar.txt -> baz.txtと順番に読み取って出力する目的で作成
 * でもこれだと順番の保証がない
 */
const readFile = () => {
  fs.readfile("foo.txt", (err: Error, data: string | Buffer) => {
    console.log("foo:", data);
  });

  fs.readfile("bar.txt", (err: Error, data: string | Buffer) => {
    console.log("bar:", data);
  });

  fs.readfile("baz.txt", (err: Error, data: string | Buffer) => {
    console.log("baz:", data);
  });
};

/**
 * コールバック地獄と言われてるやつ
 *
 * 順番は保証されるが、とても見づらい
 */
const readFileWithCallBack = () => {
  fs.readfile("foo.txt", (err: Error, data: string | Buffer) => {
    console.log("foo:", data);
    fs.readfile("bar.txt", (err: Error, data: string | Buffer) => {
      console.log("bar:", data);
      fs.readfile("baz.txt", (err: Error, data: string | Buffer) => {
        console.log("baz:", data);
      });
    });
  });
};

/**
 * Promiseオブジェクトが生まれる
 */

// 自分でPromiseオブジェクトを作って、使ってみた例
const promise = new Promise((resolve, reject) => {
  if (Math.random() < 0.5) {
    resolve("Success");
  } else {
    reject(new Error("Failure"));
  }
});

promise
  .then((value) => {
    console.log(value); // 成功したらSuccessが表示される
    return "Success again";
  })
  .then((value) => {
    // then()はコールバックで返した値が次のthen() or finally()のコールバックの引数として受け取るようになってる
    console.log(value); // 成功したら次にSuccess againが表示される
  })
  .catch((error) => {
    console.error(error); // 失敗したらエラーとしてFailureが表示される
  })
  .finally(() => {
    console.log("Completed"); // 成功失敗問わずCompletedが表示される
  });

// よくあるようなPromise
const getUser = (userID: number) =>
  fetch(`https:// jsonplaceholder. typicode. com/ users/${userID}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`${response.status} Error`);
      } else {
        return response.json();
      }
    }
  );

getUser(2)
  .then((user: string) => {
    console.log(user);
  })
  .catch((error: Error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Completed");
  });

/**
 * Promiseのシンタックスシュガーがうまれる
 * - > async/await
 * よく間違われるけど「エイシンク/アウェイト」である
 * 「アシンク」っていうとちょっと恥ずかしい思いをする（やったことある）
 */

const getUserWithAsync = async (userID: number) => {
  const response = await fetch(
    `https:// jsonplaceholder. typicode. com/ users/${userID}`
  );

  if (!response.ok) new Error(`${response.status} Error`);
  return response.json();
};

(async () => {
  try {
    const user = await getUserWithAsync(2);
    console.log(user);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Completed");
  }
})();
