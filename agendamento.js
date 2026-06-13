// Funções de ajuda para seleção única de data e horário
function selecionarUnico(botaoAtivo, grupo, classeAtiva) {
  grupo.forEach((botao) => {
    const ativo = botao === botaoAtivo;
    botao.classList.toggle(classeAtiva, ativo);
    botao.setAttribute("aria-pressed", String(ativo));
  });
}

function obterSelecionado(grupo, classeAtiva) {
  return grupo.find((botao) => botao.classList.contains(classeAtiva));
}

function formatarData(botaoData) {
  const dia =
    botaoData.querySelector(".agendamento-date-day")?.textContent.trim() || "";
  const semana =
    botaoData.querySelector(".agendamento-date-label")?.textContent.trim() ||
    "";
  return `${dia} ${semana}`.trim();
}

function exibirFeedbackBotao(botao, texto) {
  botao.textContent = texto;
}

function aguardarRedirecionamento(botao) {
  exibirFeedbackBotao(botao, "Agendando...");
  botao.disabled = true;
  botao.classList.add("agendamento-button--disabled");
}

function inicializarAgendamento() {
  const datas = Array.from(document.querySelectorAll(".agendamento-date"));
  const horarios = Array.from(document.querySelectorAll(".agendamento-time"));
  const botaoAgendar = document.querySelector(".agendamento-button");
  const textareaComentarios = document.querySelector("#agendamento-notes");

  if (
    !botaoAgendar ||
    datas.length === 0 ||
    horarios.length === 0 ||
    !textareaComentarios
  ) {
    return;
  }

  datas.forEach((botao) => {
    botao.addEventListener("click", () => {
      selecionarUnico(botao, datas, "agendamento-date--active");
    });
  });

  horarios.forEach((botao) => {
    botao.addEventListener("click", () => {
      selecionarUnico(botao, horarios, "agendamento-time--active");
    });
  });

  botaoAgendar.addEventListener("click", () => {
    if (botaoAgendar.disabled) {
      return;
    }

    const dataSelecionada = obterSelecionado(datas, "agendamento-date--active");
    const horarioSelecionado = obterSelecionado(
      horarios,
      "agendamento-time--active",
    );

    if (!dataSelecionada || !horarioSelecionado) {
      window.alert(
        "Por favor, selecione uma data e um horário para continuar.",
      );
      return;
    }

    const dadosAgendamento = {
      data: formatarData(dataSelecionada),
      horario: horarioSelecionado.textContent.trim(),
      comentarios: textareaComentarios.value.trim(),
    };

    localStorage.setItem("agendamento", JSON.stringify(dadosAgendamento));

    aguardarRedirecionamento(botaoAgendar);

    setTimeout(() => {
      window.location.href = "confirmacao.html";
    }, 1000);
  });
}

document.addEventListener("DOMContentLoaded", inicializarAgendamento);
