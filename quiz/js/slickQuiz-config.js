// Configure aqui o texto e as perguntas do seu questionário
//</br><img src=https://media.giphy.com/media/aMUHfcjeOY42Q/giphy.gif style=width:100%;height:100%;display: block;>

var quizJSON = {
    "info": {
        "r" : "requests.get(location_url)",
        "texto" : "r.content.decode('utf8')",
        "$j_encoded" : "json_encode(utf8_encode($string))", 
        "name":    "Teste seu conhecimento!",
        "main":    "<p>Responda as 12 questões abaixo!</p>",
        "results": "<h5>Observação:</h5><p>Uma antiga prática jesuítica diz que “a repetição, com correção, até a exaustão, leva a perfeição!”</p>",
        "level1":  "Você foi nota 10!",
        "level2":  "Só mais um pouco, nota 09!",
        "level3":  "Está melhorando, mas é ainda um amador",
        "level4":  "Pouco conhecimento",
        "level5":  "Volte para a escola, criança..." 
    },
    "questions": [
        { // Question 1 - Instruções são classificadas
            "q": "O termo '___________________' se refere a todas as possíveis instruções que podem ser <em>interpretadas</em> e <em>executadas</em> por um processador. Este conjunto varia de processador para processador conforme mostra a tabela abaixo podemos ver que a quantidade de instruções varia de acordo com o processador. Note que à medida em que os processadores evoluíram a quantidade de instruções aumentou significativamente:</br></br><img src=quiz/images/tabela1.jpg style=width:50%;height:50%;display: block;>",
            "a": [
                {"option": "Todas as opções erradas",          "correct": false},
                {"option": "códigos binários",                 "correct": false},
                {"option": "conjunto de instruções",           "correct": true},
                {"option": "programação",                      "correct": false} 
            ],
            "correct": "<p><span><i style=font-size:1.5em;>☺</i>Muito Bem! </span> Conjunto de instruções são instruções que podem ser interpretadas e executadas por um processador. </p>",
            "incorrect": "<p><span><i style=font-size:1.5em;>!►</i> Alternativa Errada! </span> Ao final do Quiz, clique em <em>Reiniciar</em>, e tente novamente.</p>" // sem vírgula aqui
        },

        { // Question 2 - Instruções são classificadas
            "q": "Complete a lacuna: Uma instrução é um conjunto de bits devidamente codificados que indica ao computador que sequência de micro-operações ele deve realizar. Instruções são classificadas por semelhança de ____________.</br></br><img src=https://media.giphy.com/media/bi6RQ5x3tqoSI/giphy.gif style=width:50%;height:50%;display: block;>",
            "a": [
                {"option": "Todas as opções erradas",       "correct": false},
                {"option": "interação e formato",           "correct": false},
                {"option": "propósito e formato",           "correct": true},
                {"option": "formato",                       "correct": false} 
            ],
            "correct": "<p><span><i style=font-size:1.5em;>☺</i>Muito Bem! </span> Instruções são classificadas por semelhança propósito e formato. </p>",
            "incorrect": "<p><span><i style=font-size:1.5em;>!►</i> Alternativa Errada! </span> Ao final do Quiz, clique em <em>Reiniciar</em>, e tente novamente.</p>" // sem vírgula aqui
        },

        { // Question 3 -  A afirmação acima é
            "q": "(...)'Muitas das instruções de um computador realizam operações sobre operandos (p.ex. soma de dois elementos). Operandos podem estar em qualquer posição da memória ou em qualquer registrador (inclusive em um registrador pertencente a um dispositivo de entrada e saída).(...)' A afirmação acima é:",
            "a": [
                {"option": "Parcialmente correta",               "correct": false},
                {"option": "Totalmente correta",                 "correct": true},
                {"option": "Falsa",                              "correct": false}
                ],
                                              
            "correct": "<p><span><span><i style=font-size:1.5em;>☺</i>Muito Bem! </span> Continue assim.</p>",
            "incorrect": "<p><span><i style=font-size:1.5em;>!►</i> Alternativa Errada! </span> Ao final do Quiz, clique em <em>Reiniciar</em>, e tente novamente.</p>" // sem vírgula aqui
        },

        { // Question 4 - tarefas básicas realizadas por um processador
            "q": "Quais são as tarefas básicas realizadas por um processador que caracterizam um ciclo, pois as tarefas são executadas repetidamente, sempre e sempre, até que seja decodificada uma instrução que indique parada ao computador (halt, stop, wait, etc.).</br></br><img src=https://media.giphy.com/media/lRqNbQMrSaC2Y/giphy.gif style=width:100%;height:100%;display: block;></br> Selecione a alternativa correta:",
            "a": [
                {"option": "Buscas e decodificações",                        "correct": false},
                {"option": "As execuções de instruções",                     "correct": false},
                {"option": "As decodificações",                              "correct": false},
                {"option": "Busca, decodificação e execução de instruções",  "correct": true} 
            ],
            "correct": "<p><span><span><i style=font-size:1.5em;>☺</i>Muito Bem! </span> Busca, decodificação e execução de instruções são as tarefas básicas realizadas por um processador que caracterizam um ciclo. </p>",
            "incorrect": "<p><span><i style=font-size:1.5em;>!►</i> Alternativa Errada! </span> Ao final do Quiz, clique em <em>Reiniciar</em>, e tente novamente.</p>" // sem vírgula aqui
        },

        { // Question 5
            "q": "Complete as lacunas. (...)'O conjunto de instruções do Neander compreende 11 instruções, codificadas por meio dos ______ bits mais significativos da palavra que contém o código da instrução.(...)' Na tabela, 'end' significa endereço direto. Nas instruções STA, LDA, ADD, OR e AND, end corresponde ao endereço de __________. Nas instruções JMP, JN e JZ, end corresponde ao endereço de ________. </br></br><img src=quiz/images/tabela01.jpg style=width:100%;height:100%;display: block;> ",
            "a": [
                {"option": "quatro, operando, desvio",    "correct": true},
                {"option": "quatro, operação, fim",       "correct": false},
                {"option": "três, desvio, operando",      "correct": false},
                {"option": "todas as alternativas falsas",   "correct": false} 
            ],
            "correct": "<p><span><span><i style=font-size:1.5em;>☺</i>Muito Bem! </span> Continue assim.</p>",
            "incorrect": "<p><span><i style=font-size:1.5em;>!►</i> Alternativa Errada! </span> Ao final do Quiz, clique em <em>Reiniciar</em>, e tente novamente.</p>" // sem vírgula aqui
        },

        { // Question 6
            "q": "No que se refere ao formato do código da operação, existem algumas possibilidades de formato das instruções. Quais são elas?",
            "a": [
                {"option": "Instruções com código de operação com tamanho fixo e com tamanho variável",    "correct": true},
                {"option": "todas as alternativas falsas",                                                 "correct": false},
                {"option": "Instruções com código de operação com tamanho fixo e escalonável",             "correct": false},
                {"option": "Formato definido pelo programador e pelo sistema operacional",                 "correct": false} 
            ],
            "correct": "<p><span><span><span><i style=font-size:1.5em;>☺</i>Muito Bem! </span> Continue assim.</p>",
            "incorrect": "<p><span><i style=font-size:1.5em;>!►</i> Alternativa Errada! </span> Ao final do Quiz, clique em <em>Reiniciar</em>, e tente novamente.</p>" // sem vírgula aqui
        },

        { // Question 7
            "q": "Complete as lacunas. (...)'Cada instrução precisa conter as informações exigidas pelo processador para execução. A Figura abaixo, mostra as etapas envolvidas na execução da instrução e, por implicação, define os elementos de uma instrução de máquina. Esses elementos são os seguintes: </br>• Código de _______: especifica a operação a ser realizada (por exemplo, ADD, E/S). A operação é especificada por um código binário, conhecido como código de operação, ou opcode (operation code).</br> • Referência à __________: a operação pode envolver um ou mais operandos fontes, ou seja, operandos que são entradas para a operação.</br> • Referência à __________: a operação pode produzir um resultado.</br> • Referência à ___________: isso diz ao processador onde buscar a próxima instrução após o término da execução desta instrução.' </br></br><img src=quiz/images/cicloinstrucao.gif style=width:100%;height:100%;display: block;> ",
            "a": [
                {"option": "Operação, Referência de fontes, Referência ao local, Instrução",       "correct": false},
                {"option": "Operação, operando fonte, operando destino, próxima instrução",        "correct": true},
                {"option": "Fontes, localização, instrução, destino",                                    "correct": false},
                {"option": "todas as alternativas falsas",                                         "correct": false} 
            ],
            "correct": "<p><span><span><i style=font-size:1.5em;>☺</i>Muito Bem! </span> Continue assim.</p>",
            "incorrect": "<p><span><i style=font-size:1.5em;>!►</i> Alternativa Errada! </span> Ao final do Quiz, clique em <em>Reiniciar</em>, e tente novamente.</p>"// sem vírgula aqui 
        },

{ // Question 8
            "q": "Complete as lacunas, de cima para baixo, conforme a tabela abaixo.</br></br><img src=quiz/images/operacoesexcel.gif style=width:100%;height:100%;display: block;> ",
            "a": [
                {"option": "Move (transferência), Clear (reset), Store (armazenar), Set, Multiply, Increment",        "correct": false},
                {"option": "Store (armazenar), Move (transferência), Clear (reset), Set, Multiply, Increment",        "correct": false},
                {"option": "Move (transferência), Store (armazenar), Clear (reset), Set, Multiply, Increment",        "correct": true},
                {"option": "todas as alternativas falsas",                                                            "correct": false} 
            ],
            "correct": "<p><span><span><i style=font-size:1.5em;>☺</i>Muito Bem! </span> Continue assim.</p>",
            "incorrect": "<p><span><i style=font-size:1.5em;>!►</i> Alternativa Errada! </span> Ao final do Quiz, clique em <em>Reiniciar</em>, e tente novamente.</p>" // sem vírgula aqui
        },

{ // Question 9
            "q": "De acordo com o conteúdo apresentado, conjunto de instruções, defina <em>'Envio de instrução.'</em> As imagens abaixo demostram uma representação simplificada dos componentes de um microprocessador:</br><img src=quiz/images/IBMpowerpc970fx.gif style=width:50%;height:50%;display: block;></br><img src=quiz/images/microprocessador.jpg style=width:55%;height:55%;display: block;> ",
            "a": [
                {"option": "O processo de iniciar a execução da instrução do sistema operacional.",                        "correct": false},
                {"option": "O processo de enviar instruções para o compilador do programa.",                               "correct": false},
                {"option": "O processo de iniciar a execução da instrução nas unidades funcionais do processador.",        "correct": true},
                {"option": "todas as alternativas falsas",                                                                 "correct": false}
            ],
            "correct": "<p><span><span><i style=font-size:1.5em;>☺</i>Muito Bem! </span> Isso ocorre quando uma instrução se movimenta do estágio de decodificação do pipeline para o primeiro estágio de execução do pipeline.</p>",
            "incorrect": "<p><span><i style=font-size:1.5em;>!►</i> Alternativa Errada! </span> Ao final do Quiz, clique em <em>Reiniciar</em>, e tente novamente.</p>" // sem vírgula aqui
        },

{ // Question 10
            "q": "Complete as lacunas: 'O processamento exigido para uma única instrução é chamado de ciclo de instrução. Usando a descrição simplificada em duas etapas dadas anteriormente, o ciclo de instrução é representado na Figura 3.3. As duas etapas são conhecidas como ciclo de busca e ciclo de execução. A execução do programa só termina se a máquina for _________, se houver algum tipo de ______ irrecuperável ou se for encontrada uma _______ do programa que interrompa o computador.' </br><img src=quiz/images/ciclobasico.gif style=width:100%;height:100%;display: block;> ",
            "a": [
                {"option": "desligada, erro, instrução",            "correct": true},
                {"option": "apaga, 'bug', letra",                   "correct": false},
                {"option": "quimada, erro, vírus",                  "correct": false},
                {"option": "todas as alternativas falsas",          "correct": false} 
            ],
            "correct": "<p><span><span><i style=font-size:1.5em;>☺</i>Muito Bem! </span> </p>",
            "incorrect": "<p><span><i style=font-size:1.5em;>!►</i> Alternativa Errada! </span> Ao final do Quiz, clique em <em>Reiniciar</em>, e tente novamente.</p>" // sem vírgula aqui
        },
   
   { // Question 11
            "q": "A função básica realizada por um computador é a execução de um programa, que consiste em um conjunto de instruções armazenadas na memória. O processador faz o trabalho real executando instruções especificadas no programa. Esta seção oferece uma visão geral dos principais elementos da execução do programa. Em sua forma mais simples, o processamento de instrução consiste em duas etapas: o processador lê (busca) instruções da memória, uma de cada vez, e executa cada instrução. A execução da instrução pode envolver diversas operações e depende da natureza da instrução. Dessa forma, a execução do programa consiste em?.' </br><img src=quiz/images/ciclobasico.gif style=width:100%;height:100%;display: block;> ",
            "a": [
                {"option": "executar as instruções",                                      "correct": false},
                {"option": "repetir o processo de busca e execução de instrução",         "correct": true},
                {"option": "compilar as instruções",                                      "correct": false},
                {"option": "todas as alternativas falsas",                                "correct": false} 
            ],
            "correct": "<p><span><span><i style=font-size:1.5em;>☺</i>Muito Bem! </span></p>",
            "incorrect": "<p><span><i style=font-size:1.5em;>!►</i> Alternativa Errada! </span> Ao final do Quiz, clique em <em>Reiniciar</em>, e tente novamente.</p>" // sem vírgula aqui
        },

         { // Question 12
           "q": "Elabore um ________________ sobre o conteúdo apresentado.</br><img src=quiz/images/mapaconceitual.jpg style=width:100%;height:100%;display: block;>",
           "a": [
                {"option": "Mapa conceitual",        "correct": true},
                {"option": "Mapa de valores",        "correct": false}
           ],
            "correct": "<p><span><span><i style=font-size:1.5em;>☺</i></span></p>",
            "incorrect": "<p><span><i style=font-size:1.5em;>!►</i> Alternativa Errada! </span></p>" // sem vírgula aqui
         }
    ]
};

 
