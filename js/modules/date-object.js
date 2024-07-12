export default function initFuncionamento() {
  //   function calcularDataViagem() {
  //     const agora = new Date();
  //     const futuro = new Date("April 11, 2024");
  //     console.log(agora);
  //     console.log(futuro);
  //     function transformarDias(tempo) {
  //       return tempo / (24 * 60 * 60 * 1000);
  //     }
  //     const diasAgora = transformarDias(agora.getTime());
  //     const diasFuturo = transformarDias(futuro.getTime());
  //     console.log(Math.floor(diasFuturo - diasAgora));
  //   }
  //   calcularDataViagem();

  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const diaAberto = diasSemana.indexOf(diaAgora) !== -1;
  // console.log(diaAberto);

  // TERNÁRIO
  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];
  // console.log(horarioAberto);

  if (diaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
