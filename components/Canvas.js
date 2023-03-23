import React, { useEffect, useRef } from "react";

export default function Canvas() {
  let canvasRef = useRef(null);

  useEffect(() => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");

    let rows = 20;
    let colums = 20;
    let positionSnake = [{ x: 19, y: 3 }];
    let positionFood;
    let cellWidth = canvas.width / colums;
    let cellHeight = canvas.height / rows;
    let direction = "LEFT";
    let collected = false;

    //start game

    placeFood();

    //settings
    setInterval(gameLoop, 100);
    document.addEventListener("keydown", controller);

    draw();

    // drawing

    function draw() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      ctx.fillStyle = "white";

      positionSnake.forEach((part) => add(part.x, part.y));

      ctx.fillStyle = "red";
      add(positionFood.x, positionFood.y);

      requestAnimationFrame(draw);
    }

    function add(x, y) {
      ctx.fillRect(
        x * cellWidth,
        y * cellHeight,
        cellWidth - 1,
        cellHeight - 1
      );
    }

    // controler first way on PC
    function controller(e) {
      if (e.keyCode == 37) {
        direction = "LEFT";
      }
      if (e.keyCode == 38) {
        direction = "UP";
      }
      if (e.keyCode === 39) {
        direction = "RIGHT";
      }
      if (e.keyCode === 40) {
        direction = "DOWN";
      }
    }

    function placeFood() {
      let randomX = Math.floor(Math.random() * colums);
      let randomY = Math.floor(Math.random() * rows);

      positionFood = { x: randomX, y: randomY };
    }

    function shiftSnake() {
      for (let i = positionSnake.length - 1; i > 0; i--) {
        const part = positionSnake[i];
        const lastPart = positionSnake[i - 1];
        part.x = lastPart.x;
        part.y = lastPart.y;
      }
    }

    function gameOver() {
      let firstPart = positionSnake[0];
      let otherParts = positionSnake.slice(1);
      let dublicateParts = otherParts.find(
        (part) => part.x == firstPart.x && part.y == firstPart.y
      );

      if (
        positionSnake[0].x < 0 ||
        positionSnake[0].x > colums - 1 ||
        positionSnake[0].y < 0 ||
        positionSnake[0].y > rows - 1 ||
        dublicateParts
      ) {
        // restart game

        placeFood();
        positionSnake = [{ x: 19, y: 3 }];
        direction = "LEFT";
      }
    }

    function gameLoop() {
      gameOver();

      if (collected) {
        positionSnake = [
          { x: positionSnake[0].x, y: positionSnake[0].y },
          ...positionSnake,
        ];
        collected = false;
      }

      shiftSnake();

      // set direction
      if (direction === "LEFT") {
        positionSnake[0].x--;
      }
      if (direction === "RIGHT") {
        positionSnake[0].x++;
      }
      if (direction === "UP") {
        positionSnake[0].y--;
      }
      if (direction === "DOWN") {
        positionSnake[0].y++;
      }

      if (
        positionSnake[0].x == positionFood.x &&
        positionSnake[0].y == positionFood.y
      ) {
        placeFood();
        collected = true;
      }
    }
  }, []);

  return <canvas width="330" height="325" ref={canvasRef} />;
}
