/*!
 * 系统配置文件
 */

define( function () {
    var formulaEditorLang = window.formulaEditorLang || {};
    return {

        // 光标符号
        cursorCharacter: "\uF155",

        // 根占位符内容与颜色
        rootPlaceholder: {
            color: "#666",
            content: formulaEditorLang["在此处键入公式"] || "在此处键入公式",
            fontsize: 16
        },

        scrollbar: {
            padding: 5,
            step: 150
        }

    };

} );