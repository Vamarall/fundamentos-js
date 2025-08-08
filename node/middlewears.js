// Padrao middlewear (chain of responsibility)

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewears) => {

    const exec = (index) => {
        middlewears && index < middlewears.length &&
            middlewears[index](ctx, () => exec(index + 1))
    }
    exec(0)

}

const contexto = {}
exec(contexto, passo1, passo2, passo3)
console.log(contexto)
