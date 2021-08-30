const express = require("express");
const router = express.Router();
const chatbotController = require("../controllers/ChatbotController");


/**
 * @swagger
 * components:
 *   schemas:
 *     History:
 *       type: object
 *       required:
 *         - chatArr
 *       properties:
 *         chatArr:
 *           type: string
 *       example:
 *         chatArr : Xem danh sách sản phẩm
 */


/**
* @swagger
* components:
*   schemas:
*     Notice:
*       type: object
*       properties:
*         notice:
*           type: object
*       example:
*         notice: Body is a button
*/

/**
 * @swagger
 * /api/v1/chatbot/history:
 *   get:
 *     security:
 *          - bearerAuth: []
 *     summary: Returns the chatArr history
 *     responses:
 *       200:
 *         description: The history of chat Array
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: The Token not found
 */
router.get("/history",chatbotController.getHistory);

/**
 * @swagger
 * /api/v1/chatbot/history:
 *   post:
 *     summary: Store the chatArr history
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/History'
 *     responses:
 *      200:
 *         description: Store chatArr history success
 *      401:
 *         description: Unauthorized
 *      403:
 *         description: Forbidden
 *      404:
 *         description: The token not found
 */
router.post("/history",chatbotController.storeHistory);

/**
* @swagger
* /api/v1/chatbot/navigateNode:
*   post:
*     summary: Get the navigate Node
*     requestBody:
*       required: false
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Notice'
*     responses:
*      200:
*         description:  Success
*      401:
*         description: Unauthorized
*      403:
*         description: Forbidden
*/
router.post("/navigateNode", chatbotController.navigateNode);
router.post('/command', chatbotController.commandHandler);

module.exports = router;
